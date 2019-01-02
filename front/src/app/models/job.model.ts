import { ContractType } from './contract-type.model';

export interface Job {
    id?: Number;
    title: string;
    company: string;
    city: string;
    zipcode: string;
    description: string;
    contractType: ContractType;
    startDate: Date;
    publishedDate: Date;
}
