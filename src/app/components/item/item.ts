export class Item{
  constructor(private _id:number, private _name:string, private _description:string, private _refrenceNumber:number){}


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get refrenceNumber(): number {
    return this._refrenceNumber;
  }

  set refrenceNumber(value: number) {
    this._refrenceNumber = value;
  }
}
