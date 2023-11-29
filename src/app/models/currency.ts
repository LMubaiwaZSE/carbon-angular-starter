export interface Currency{
    message(message: any): unknown;
    id: string;
    currency: string;
    status: string;    
}