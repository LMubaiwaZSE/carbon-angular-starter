export interface Period{


    id: string;
        status: string;
        createdDate: Date;
        modifiedDate: Date;
        createdBy: string;
        modifiedBy: string;
        systemField: string;
        approvedBy: string;
        dateApproved: Date;
        periodName: string;
        periodLength: number;
        price:number;
        _packagePeriodId:string;
        _isLinked:boolean;
       
    }