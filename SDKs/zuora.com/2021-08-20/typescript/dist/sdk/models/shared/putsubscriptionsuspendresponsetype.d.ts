import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutSubscriptionSuspendResponseType extends SpeakeasyBase {
    creditMemoId?: string;
    invoiceId?: string;
    paidAmount?: number;
    paymentId?: string;
    resumeDate?: Date;
    subscriptionId?: string;
    success?: boolean;
    suspendDate?: Date;
    termEndDate?: Date;
    totalDeltaTcv?: number;
}
