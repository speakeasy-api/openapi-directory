import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum {
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
export declare class PostRejectPaymentResponseFinanceInformation extends SpeakeasyBase {
    bankAccountAccountingCode?: string;
    bankAccountAccountingCodeType?: string;
    transferredToAccounting?: PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum;
    unappliedPaymentAccountingCode?: string;
    unappliedPaymentAccountingCodeType?: string;
}
export declare enum PostRejectPaymentResponseGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}
export declare enum PostRejectPaymentResponseMethodTypeEnum {
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
export declare enum PostRejectPaymentResponseTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
export declare class PostRejectPaymentResponse extends SpeakeasyBase {
    accountId?: string;
    amount?: number;
    cancelledOn?: Date;
    comment?: string;
    createdById?: string;
    createdDate?: Date;
    creditMemoId?: string;
    financeInformation?: PostRejectPaymentResponseFinanceInformation;
    gatewayId?: string;
    gatewayResponse?: string;
    gatewayResponseCode?: string;
    gatewayState?: PostRejectPaymentResponseGatewayStateEnum;
    id?: string;
    markedForSubmissionOn?: Date;
    methodType?: PostRejectPaymentResponseMethodTypeEnum;
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
    type?: PostRejectPaymentResponseTypeEnum;
    updatedById?: string;
    updatedDate?: Date;
}
