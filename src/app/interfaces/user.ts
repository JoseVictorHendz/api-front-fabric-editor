import { IPeople } from './people';

export interface IUser {
    id?: string;
    active?: boolean;
    userName?: string;
    password?: string;
    people?: IPeople;
}
