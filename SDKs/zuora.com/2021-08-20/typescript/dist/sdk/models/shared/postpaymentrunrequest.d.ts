import { SpeakeasyBase } from "../../../internal/utils";
import { PostPaymentRunDataElementRequest } from "./postpaymentrundataelementrequest";
export declare class PostPaymentRunRequest extends SpeakeasyBase {
    accountId?: string;
    applyCreditBalance?: boolean;
    autoApplyCreditMemo?: boolean;
    autoApplyUnappliedPayment?: boolean;
    batch?: string;
    billCycleDay?: string;
    billingRunId?: string;
    collectPayment?: boolean;
    consolidatedPayment?: boolean;
    currency?: string;
    data?: PostPaymentRunDataElementRequest[];
    paymentGatewayId?: string;
    processPaymentWithClosedPM?: boolean;
    runDate?: Date;
    targetDate?: Date;
}
