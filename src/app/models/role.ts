export interface Role{
    message(message: any): unknown;
     
    
    id: string;
    role: string;
    status: string;    
}