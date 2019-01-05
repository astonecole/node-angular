import { ContractType } from './contract-type.model';

export class Job {
    id?: Number;
    title = '';
    company = '';
    city = '';
    zipcode = '';
    description = '';
    contractType: ContractType = null;
    startDate: Date = null;
    publishedDate: Date = null;
}
