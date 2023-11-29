import { IntermediaryCategory } from "./intermediaryCategory";

export interface Intermediary{
    id: string;
    firmName: string;
    companyRegNumber: string;    
    accountNumber: string;
    phone: string;
    email: string;  
    intermediaryCategoryId: IntermediaryCategory;   
    status: string;      
}