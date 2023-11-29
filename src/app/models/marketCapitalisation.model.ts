export interface MarketCapitalisation {
    id: string;
    status: string;
    createDated: Date;
    modifedDate: Date;
    createdUser: string;
    modifiedUser: string;
    systemField: string;
    approvedBy: string;
    dateApproved: Date;
    stats_date: Date;
    company_name: string;
    symbol: string;
    closing_price: number;
    outstanding_shares: number;
    market_capitalisation: number;
  }