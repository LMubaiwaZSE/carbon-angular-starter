import { Indices } from "./indices.model";

export interface Dtr {
    id?: string | any;
    status?: string | any;
    created_date?: Date | string | any;
    modified_date?: Date;
    created_user?: string;
    modified_user?: string;
    system_field?: string;
    content?: string;
    approved_by?: string;
    date_approved?: Date;
  }

  export interface DtrContent {
    // Volume and Turnover
     totalMarketVolume?: number;
     totalMarketTurnover?: number;
     foreignPurchasesValue?: number;
     foreignPurchasesNumberOfShares?: number;
     foreignSalesValue?: number;
     foreignSalesNumberOfShares?: number;
     totalNumberOfTrades?: number;
    // top 5 counters volumes traded
     topFiveCountersValues?: TopFiveCountersValue[];
     topFiveCountersVolumes?: TopFiveCountersVolume[];
  
     miningIndices?: Indices[];
     foreignPurchases?: ForeignPurchasesDto[];
     foreignSales?: ForeignSalesDto[];
     topMovers?: TopMovers[];
     topShakers?: TopShakers[];
  
    // market capitalisation
     totalMarketCapitalisation?: number;
     marketCapitalisationList?: TopTenMarketCap[];
     top10totalMarketCapitalisation?: number;
  }

  export interface TopFiveCountersValue {
     counter?: string;
     value?: number;
     closingPrice?: number;
     volume?: number;
  }
  export interface TopFiveCountersVolume {
     counter?: string;
     quantity?: number;
     closingPrice?: number;
     valueTraded?: number;
  }

  export interface ForeignPurchasesDto {
     counter?: string;
     quantity?: number;
     grossAmount?: number;
     closing_price?: number;
  }
  export interface ForeignSalesDto {
     counter?: string;
     quantity?: number;
     grossAmount?: number;
     closing_price?: number;
  }

  export interface TopMovers {
     counter?: string;
     todayPrice?: number;
     previousPrice?: number;
     point_change?: number;
     percentage_change?: number;
  }

  export interface TopShakers {
     counter?: string;
     todayPrice?: number;
     previousPrice?: number;
     point_change?: number;
     percentage_change?: number;
  }

  export interface TopTenMarketCap {
     counter?: string;
     today_value?: number;
     percent_of_total_market_cap?: number;
  }