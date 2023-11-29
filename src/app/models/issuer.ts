import { Sector } from "./sector";

export interface Issuer{
    id: string;
    firmName: string;
    status: string;    
    companyRegNumber: String;
    email: String;
    phone: String;
    address: String;
    sectorId: Sector;


   
}