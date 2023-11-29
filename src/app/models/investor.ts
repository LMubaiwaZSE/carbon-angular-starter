import { InstitutionalInvestorCategory } from "./institutionalInvestorCategory";
import { InvestorType } from "./clientType";

export interface Investor{
    id: string;
    investorTypeId: InvestorType;
    institutionCategoryId: InstitutionalInvestorCategory;
    accountNumber: string;
    title: string;
    firstName: string;
    lastname: string;
    idNumber: string;
    passportNumber: string;
    dob: string;
    gender: string;
    email: string;
    mobileNumber: string;
    housenumber: string;
    streetName: string;
    surburb: string;
    city: string;
    country: string;
    foreignLocal: string;
    sourceOfIncome: string;
    company: string;
    registrationNumber: string;
    status: string;    
}