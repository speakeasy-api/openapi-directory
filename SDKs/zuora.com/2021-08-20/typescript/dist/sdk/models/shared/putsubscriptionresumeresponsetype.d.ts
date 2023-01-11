import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutSubscriptionResumeResponseType extends SpeakeasyBase {
    creditMemoId?: string;
    invoiceId?: string;
    paidAmount?: number;
    paymentId?: string;
    resumeDate?: Date;
    subscriptionId?: string;
    success?: boolean;
    termEndDate?: Date;
    totalDeltaTcv?: number;
}
