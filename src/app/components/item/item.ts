export class Item{
  constructor(private _itemId:number, private _itemName:string, private _itemDescription:string, private _itemRefrenceNumber:number){}

  get itemId(): number {
    return this._itemId;
  }

  set itemId(value: number) {
    this._itemId = value;
  }

  get itemName(): string {
    return this._itemName;
  }

  set itemName(value: string) {
    this._itemName = value;
  }

  get itemDescription(): string {
    return this._itemDescription;
  }

  set itemDescription(value: string) {
    this._itemDescription = value;
  }

  get itemRefrenceNumber(): number {
    return this._itemRefrenceNumber;
  }

  set itemRefrenceNumber(value: number) {
    this._itemRefrenceNumber = value;
  }
}
