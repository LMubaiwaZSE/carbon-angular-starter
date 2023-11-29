import { Currency } from "./currency";
import { TransactionType } from "./transactionType";
import { WalletType } from "./walletType";

export interface Wallet{
     
    id: string;
    status: string;
    accountName: string;
    accountNumber: string;
    walletTypeId: WalletType;
    currencyId: Currency;
    transactionTypeId: TransactionType;    
    balance: string;
    lastTransDate: string;     

    

}