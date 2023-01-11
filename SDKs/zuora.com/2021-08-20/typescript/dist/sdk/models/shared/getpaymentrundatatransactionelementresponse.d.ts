import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPaymentRunDataTransactionElementResponseStatusEnum {
    Processed = "Processed",
    Processing = "Processing",
    Error = "Error"
}
export declare enum GetPaymentRunDataTransactionElementResponseTypeEnum {
    Payment = "Payment",
    CreditMemo = "CreditMemo",
    UnappliedPayment = "UnappliedPayment",
    CreditBalanceAdjustment = "CreditBalanceAdjustment"
}
export declare class GetPaymentRunDataTransactionElementResponse extends SpeakeasyBase {
    amount?: number;
    appliedAmount?: number;
    errorCode?: string;
    errorMessage?: string;
    id?: string;
    status?: GetPaymentRunDataTransactionElementResponseStatusEnum;
    type?: GetPaymentRunDataTransactionElementResponseTypeEnum;
}
