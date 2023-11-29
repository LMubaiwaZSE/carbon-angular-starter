import { PackageService } from "../services/package.service";

export interface Services{



    id: string;
    status: string;
    createdDate: Date;
    modifiedDate: Date;
    createdBy: string;
    modifiedBy: string;
    systemField: string;
    approvedBy: string;
    dateApproved: Date;
    periodName: string;
    serviceName: string;
    tableName: string;
    isChecked:boolean;
    packageServices:PackageService[];
}