import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPaymentRunTypeStatusEnum {
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
    Error = "Error",
    Canceled = "Canceled"
}
export declare class GetPaymentRunType extends SpeakeasyBase {
    accountId?: string;
    applyCreditBalance?: boolean;
    autoApplyCreditMemo?: boolean;
    autoApplyUnappliedPayment?: boolean;
    batch?: string;
    billCycleDay?: string;
    billingRunId?: string;
    collectPayment?: boolean;
    completedOn?: Date;
    consolidatedPayment?: boolean;
    createdById?: string;
    createdDate?: Date;
    currency?: string;
    executedOn?: Date;
    id?: string;
    number?: string;
    paymentGatewayId?: string;
    processPaymentWithClosedPM?: boolean;
    runDate?: Date;
    status?: GetPaymentRunTypeStatusEnum;
    success?: boolean;
    targetDate?: Date;
    updatedById?: string;
    updatedDate?: Date;
}
