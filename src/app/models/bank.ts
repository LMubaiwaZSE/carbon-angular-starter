export interface Bank{
    message(message: any): unknown;
    id: string;
    bank: string;
    status: string;    
}