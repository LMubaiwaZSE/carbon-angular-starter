
import { Package } from "./package.model";
import { Services } from "./services.model";

export interface PackagesService{
 
   packageId?:Package;
   serviceId?:Services;
   _packageId?:string;
}