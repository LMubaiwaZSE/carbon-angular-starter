export interface Department{
    message(message: any): unknown;
    id: number;
    department: string;
    status: string;
    systemField: string;
    lastModifiedUser: string;
    createdBy: string;
    lastModifiedDate: Date;
    createDate: Date;


}