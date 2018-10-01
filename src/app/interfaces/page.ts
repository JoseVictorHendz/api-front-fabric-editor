import { IUser } from './user';

export interface IPage {
    id?: string;
    active?: boolean;
    creationDate?: string;
    name?: string;
    user?: IUser;
}
