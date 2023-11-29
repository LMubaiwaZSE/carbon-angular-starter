import { Department } from "./department";
import { Role } from "./role";

export interface Admin{
    message(message: any): unknown;
    id: string;
    title: string;
    firstname: string;    
    lastname: string;
    email: string;  
    password: string;
    role: Role;  
    department: Department;
    status: string;      
}