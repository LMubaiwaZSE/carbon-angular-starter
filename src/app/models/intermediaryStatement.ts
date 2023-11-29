import { IntermediaryWallet } from "./intermediaryWallet";
import { TransactionType } from "./transactionType";

export interface IntermediaryStatement{
     
    id: string;
    status: string;
    accountName: string;
    accountNumber: string;
    walletId: IntermediaryWallet;
    transactionTypeId: TransactionType;    
    balance: string;

    reference: string;
    debit: string;
    credit: string;    
    date: string;
    description: string;  



    
}