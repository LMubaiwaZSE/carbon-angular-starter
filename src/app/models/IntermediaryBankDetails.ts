import { Bank } from "./bank";
import { Currency } from "./currency";
import { Intermediary } from "./intermediary";

export interface IntermediaryBankDetails{
     
    id: string;
    status: string;
    bankId: Bank ;
    currencyId: Currency;
    accountName: string;
    accountNumber: string;
    branch: string;
    branchCode: string;    
    swiftCode: string;
    intermediaryId: Intermediary; 
    
    
}