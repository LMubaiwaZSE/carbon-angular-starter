import { Package } from "./package.model";
import { Period } from "./period.model";
import { Services } from "./services.model";

export interface Subscription {
  id?: string;
  status?: string;
  createDated?: string | any;
  modifiedDate?: string;
  createdUser?: string;
  modifiedUser?: string;
  systemField?: string;
  approvedBy?: string;
  dateApproved?: string;
  clientId?: string;
  packageId?: string;
  periodId?: string;
  currencyId?: string;
  price?: number;
  expiry_date?: string | any;

  //transient properties
  period?: Period;
  service?: Services[];
  _package?: Package
}
