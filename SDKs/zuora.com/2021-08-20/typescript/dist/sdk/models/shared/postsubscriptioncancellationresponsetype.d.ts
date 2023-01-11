import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSubscriptionCancellationResponseType extends SpeakeasyBase {
    cancelledDate?: Date;
    creditMemoId?: string;
    invoiceId?: string;
    paidAmount?: number;
    paymentId?: string;
    subscriptionId?: string;
    success?: boolean;
    totalDeltaMrr?: number;
    totalDeltaTcv?: number;
}
