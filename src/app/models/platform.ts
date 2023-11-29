import { Currency } from "./currency";
import { PlatformCategory } from "./platformCategory";

export interface Platform{
    message(message: any): unknown;
    id: string;
    name: string;
    platformCategoryId: PlatformCategory;
    currencyId: Currency;
    phone:string;
    email:string;
    address:string;
    status: string;    
}