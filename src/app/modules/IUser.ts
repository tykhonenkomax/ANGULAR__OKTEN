import {IAddress} from "./IAddress";

export interface IUser {
  id: number;
  name: string;
  username: string;
  address: IAddress;
}
