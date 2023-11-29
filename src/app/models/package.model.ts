import { Services } from "./services.model";

export interface Package{
 
    packageName?:string;
    id?:string;
    status?:string;
    createdDate?:number;
    modifiedDate?:number;
    createdUser?:string;
    modifiedUser?:string;
    systemField?:any;
    approvedBy?:string;
    dateApproved?:number;
    _services?:Services[];
    _periods?:any;
}