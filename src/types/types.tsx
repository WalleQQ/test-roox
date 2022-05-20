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
  username: string;
  phone: string;
  website: string;
  address: IAddress;
  company: ICompany;
  description: string;
}
