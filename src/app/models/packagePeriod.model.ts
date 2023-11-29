import { Package } from "./package.model";
import { Period } from "./period.model";

export interface PackagePeriod{
 
    packageId?:Package;
    periodId?:Period;
    price?:number;
    id?:string;
  
 
 }