import { TransactionType } from "./transactionType";
import { WalletType } from "./walletType";

export interface IntermediaryWallet{
     
    id: string;
    status: string;
    accountName: string;
    accountNumber: string;
    walletTypeId: WalletType;
    transactionTypeId: TransactionType;    
    balance: string;
    lastTransDate: string;     

    

}