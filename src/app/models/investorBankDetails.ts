import { Bank } from "./bank";
import { Currency } from "./currency";
import { Investor } from "./investor";

export interface InvestorBankDetails{
     
    id: string;
    status: string;
    bankId: Bank ;
    accountName: string;
    accountNumber: string;
    currencyId: Currency;
    branch: string;
    branchCode: string;    
    swiftCode: string;
    investorId: Investor; 
    
    
}