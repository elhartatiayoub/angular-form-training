export class Address {
  public lineOne: string;
  public city: string;
  public country: string;
  public zipCode: number;
  public state: string;
  public lineTwo: string;
  
  constructor() { 
    this.lineOne = '';
    this.lineTwo = '';
    this.city = '';
    this.country = '';
    this.zipCode = null;
  }
}
