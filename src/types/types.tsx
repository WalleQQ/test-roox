export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
  company: ICompany;
}
