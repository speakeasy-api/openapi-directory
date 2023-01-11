import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutRenewSubscriptionResponseType extends SpeakeasyBase {
    creditMemoId?: string;
    invoiceId?: string;
    paidAmount?: number;
    paymentId?: string;
    success?: boolean;
    termEndDate?: Date;
    termStartDate?: Date;
    totalDeltaMrr?: number;
    totalDeltaTcv?: number;
}
