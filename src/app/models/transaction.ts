import { Currency } from "./currency";
import { TransactionType } from "./transactionType";
import { Wallet } from "./wallet";

export interface Transaction{
     
    id: string;
    status: string;
    accountName: string;
    accountNumber: string;
    currencyId: Currency;
    walletId: Wallet;
    transactionTypeId: TransactionType;    
    balance: string;

    reference: string;
    debit: string;
    credit: string;    
    date: string;
    description: string;  



    
}