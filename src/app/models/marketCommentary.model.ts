export interface MarketCommentary {
    id?: string | any;
 
    status?: string | any;
    created_date?: Date | string | any;
    modified_date?: Date;
    created_user?: string;
    modified_user?: string;
    system_field?: string;
    commentary?: string;
    approved_by?: string;
    date_approved?: Date;
  }