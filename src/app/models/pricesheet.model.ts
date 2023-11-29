export interface PriceList {
    id?: string;
    openPrice?: number;
    closePrice?: number;
    lowPrice?: number;
    highPrice?: number;
    statsDate?: Date | string;
    turnover?: number;
    turnoverValue?: number;
    tradesCount?: number;
    changePrice?: number;
    percentageChange?: number;
    symbolId?: number;
    name?: string;
    symbol?: string;
    isin?: string;
    status?: string | any;
    created_date?: Date;
    modified_date?: Date;
    created_user?: string;
    modified_user?: string;
    system_field?: string;
    approved_by?: string;
    date_approved?: Date;
  }