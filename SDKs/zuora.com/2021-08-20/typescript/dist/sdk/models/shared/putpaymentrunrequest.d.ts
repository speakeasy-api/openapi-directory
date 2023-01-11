import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutPaymentRunRequest extends SpeakeasyBase {
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
    paymentGatewayId?: string;
    processPaymentWithClosedPM?: boolean;
    runDate?: Date;
    targetDate?: Date;
}
