import { Issuer } from "./issuer";
import { Platform } from "./platform";

export interface IssuerTradeInfo{

    id: string;
    issuerId: Issuer;
    exchangeId: Platform;    
    depositoryId: Platform;
    transferSecretaryId: Platform;
    isnNumber: string;
    symbol: string;
    code: string;
    status: string;


}