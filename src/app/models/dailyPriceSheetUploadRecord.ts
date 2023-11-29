import { Platform } from "./platform";

export interface DailyPriceSheetUploadRecord{
    id: string;
    uploadBatchNumber: string;
    validationName: string;
    dateOfValidation: Date;
    dateReceived: string;
    dateUploaded: Date;
    platformId: Platform;
    status: String;
    createDate: Date;





}