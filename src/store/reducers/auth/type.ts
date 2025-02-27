// import { IAddress } from "../address/type";

import { IAddress } from "../address/type";

export interface IauthSliceInitialState {
  isLoading: boolean;
  data: IauthResponse | null;
  isError: boolean;
  isLoadingUser: boolean;
  loginDetailPreserve: ILoginSchema | null;
  registerDetailPreserve: IRegistrationSchema | null;
}

export interface ILoginSchema {
  password: string;
  email: string;
}

export interface ILoginSchemaErr {
  email?: string;
  password?: string;
}

export interface IRegistrationSchema {
  name: string;
  email: string;
  password: string;
  otp?: string;
}
export interface IRegistrationSchemaErr {
  name?: string;
  email?: string;
  password?: string;
  otp?: string;
}

export interface IauthResponse {
  user: IUser;
  token: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  // password: string;
  bod?: string;
  gender?: string;
  phone_number?: string;
  admin?: boolean;
  address?: IAddress;
  created_at: string;
  updated_at: string;
}

export interface IResetpassword {
  old_password: string;
  new_password: string;
}

export type IResetpasswordErr = Partial<Record<keyof IResetpassword, string>>;
