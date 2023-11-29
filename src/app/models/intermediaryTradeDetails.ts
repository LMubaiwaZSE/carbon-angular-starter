import { Intermediary } from "./intermediary";
import { Platform } from "./platform";

export interface IntermediaryTradingDetails{
     
    id: string;
    status: string;
    systemField: string ;
    exchangeId: Platform;
    depositoryId: Platform;
    intermediaryId: Intermediary;
    tradingCode: string;    


    
}