import { Intermediary } from "./intermediary";
import { Investor } from "./investor";
import { Platform } from "./platform";

export interface InvestorTradingDetails{
     
    id: string;
    status: string;
    exchangeId: Platform;
    depositoryId: Platform;
    custodianId: Intermediary;
    brokerId: Intermediary;
    edsCsd: string;
    investorId: Investor;    

}