export interface DailyPriceSheet{
     
    id: string;
    symbol: string;
    openingPrice: number;   
    closingPrice: number;  
    totalTradedVolume: number;
    percentageChange: number;  
    upDown: number;
    batchUploadRecordId: string;
    dateUploaded: Date;


}