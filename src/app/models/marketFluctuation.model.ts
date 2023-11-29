export interface MarketFluctuation {
    companyName: string;
    marketType: string;
    market: string;
    VWAP: number;
    volume: number;
    value: number;
    Prices: Price[];
    trades: Trade[];
    yields: Yield[];
  }
  
  interface Price {
    open: number;
    high: number;
    low: number;
    current: number;
    LDCP: number;
    priceChange: number;
  }
  
  interface Yield {
    open: number;
    lDCY: number;
    current: number;
    yieldChange: number;
  }
  interface Trade {
    time: string | any;
    price: number;
    volume: number;
    yield: number;
  }
  