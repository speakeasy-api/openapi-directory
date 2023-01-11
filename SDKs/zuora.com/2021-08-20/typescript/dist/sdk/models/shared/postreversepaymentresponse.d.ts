import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for the finance information related to the refund.
 *
**/
export declare class PostReversePaymentResponseFinanceInformation extends SpeakeasyBase {
    bankAccountAccountingCode?: string;
    bankAccountAccountingCodeType?: string;
    transferredToAccounting?: PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum;
    unappliedPaymentAccountingCode?: string;
    unappliedPaymentAccountingCodeType?: string;
}
export declare enum PostReversePaymentResponseGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}
export declare enum PostReversePaymentResponseMethodTypeEnum {
    Ach = "ACH",
    Cash = "Cash",
    Check = "Check",
    CreditCard = "CreditCard",
    PayPal = "PayPal",
    WireTransfer = "WireTransfer",
    DebitCard = "DebitCard",
    CreditCardReferenceTransaction = "CreditCardReferenceTransaction",
    BankTransfer = "BankTransfer",
    Other = "Other"
}
export declare enum PostReversePaymentResponseTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
export declare class PostReversePaymentResponse extends SpeakeasyBase {
    accountId?: string;
    amount?: number;
    cancelledOn?: Date;
    comment?: string;
    createdById?: string;
    createdDate?: Date;
    creditMemoId?: string;
    financeInformation?: PostReversePaymentResponseFinanceInformation;
    gatewayId?: string;
    gatewayResponse?: string;
    gatewayResponseCode?: string;
    gatewayState?: PostReversePaymentResponseGatewayStateEnum;
    id?: string;
    markedForSubmissionOn?: Date;
    methodType?: PostReversePaymentResponseMethodTypeEnum;
    number?: string;
    paymentId?: string;
    paymentMethodId?: string;
    paymentMethodSnapshotId?: string;
    reasonCode?: string;
    referenceId?: string;
    refundDate?: Date;
    refundTransactionTime?: Date;
    secondRefundReferenceId?: string;
    settledOn?: Date;
    softDescriptor?: string;
    softDescriptorPhone?: string;
    status?: string;
    submittedOn?: Date;
    success?: boolean;
    type?: PostReversePaymentResponseTypeEnum;
    updatedById?: string;
    updatedDate?: Date;
}
