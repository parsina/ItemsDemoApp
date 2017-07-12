import { Component, OnInit } from '@angular/core';
import {Item} from "./item";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ItemService} from "./item.service";

@Component({
  selector: 'itemComponent',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //Component properties
  allItems: Item[];
  itemIdToUpdate = null;
  processValidation = null;

  //Create form
  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    refnum: new FormControl('', Validators.required)
  });

  //Create constructor to get service instance
  constructor(private itemService: ItemService) {
  }

  //Create ngOnInit() and and load items
  ngOnInit(): void {
    this.getAllItems();
  }

  //Fetch all items
  getAllItems() {
    this.allItems = this.itemService.getAllItems();
  }

  //Handle create and update item
  onItemFormSubmit() {
    this.processValidation = true;
    if (this.itemForm.invalid) {
      return; //Validation failed, exit from method.
    }

    //Form is valid, now perform create or update
    let name = this.itemForm.get('name').value.trim();
    let description = this.itemForm.get('description').value.trim();
    let refnum = this.itemForm.get('refnum').value;
    if (this.itemIdToUpdate === null) {
      //Handle create item
      let item= new Item(null, name, description, refnum);
      this.itemService.createItem(item);
    } else {
      //Handle update item
      let item = new Item(this.itemIdToUpdate, name, description, refnum);
      this.itemService.updateItem(item);
    }
    this.backToCreateItem();
  }

  //Load item by id to edit
  loadItemToEdit(itemId: number) {
    let item = this.itemService.getItemById(itemId);
    this.itemForm.setValue({ name: item.name, description: item.description, refnum:item.refrenceNumber });
    this.processValidation = true;
    this.itemIdToUpdate = itemId;
  }

  //Delete item
  deleteItem(itemId: number) {
    this.itemService.deleteItemById(itemId);
  }

  //Go back from update to create
  backToCreateItem() {
    this.itemIdToUpdate = null;
    this.itemForm.reset();
    this.processValidation = false;
  }
}
