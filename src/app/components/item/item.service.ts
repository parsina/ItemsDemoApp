import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import {Item} from "./item";

@Injectable()
export class ItemService {
  private itemID:number = 3;
  private items: Item[] = [new Item(1, "Item 1", "Description 1", 111), new Item(2, "Item 2", "Description 2", 222)];

  //Fetch all items
  getAllItems(): Item[] {
    return this.items;
  }

  //Create item
  createItem(item: Item):void {
    item.id = this.itemID++;
    this.items.push(item);
  }
  //Fetch item by id
  getItemById(itemId: number): Item {
    for (let item of this.items)
      if(item.id == itemId)
        return item;
  }
  //Update item
  updateItem(item: Item):void {
    for (let theItem of this.items)
      if(theItem.id == item.id)
      {
        theItem.name = item.name;
        theItem.description = item.description;
        theItem.refrenceNumber = item.refrenceNumber;
      }
  }
  //Delete item
  deleteItemById(itemId: number): void{
    let i = 0;
    while (itemId != this.items[i].id)
      i++;
    if( i < this.items.length )
      this.items.splice(i, 1);
  }

}
