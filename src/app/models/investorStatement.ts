import { InvestorWallet } from "./investorWallet";
import { TransactionType } from "./transactionType";

export interface InvestorStatement{
     
    id: string;
    status: string;
    accountName: string;
    accountNumber: string;
    walletId: InvestorWallet;
    transactionTypeId: TransactionType;    
    balance: string;

    reference: string;
    debit: string;
    credit: string;    
    date: string;
    description: string;  



    
}