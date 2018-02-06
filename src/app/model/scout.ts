import { Parent } from './parent';

export interface Scout {
    id: string;
    firstName: string;
    lastName: string;
    parents: Parent [];
    dob: Date;
    troop: string;
}