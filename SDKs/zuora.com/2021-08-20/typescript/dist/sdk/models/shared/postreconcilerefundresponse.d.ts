import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum {
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
export declare class PostReconcileRefundResponseFinanceInformation extends SpeakeasyBase {
    bankAccountAccountingCode?: string;
    bankAccountAccountingCodeType?: string;
    transferredToAccounting?: PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum;
    unappliedPaymentAccountingCode?: string;
    unappliedPaymentAccountingCodeType?: string;
}
export declare enum PostReconcileRefundResponseGatewayStateEnum {
    Settled = "Settled",
    FailedToSettle = "FailedToSettle"
}
export declare enum PostReconcileRefundResponseMethodTypeEnum {
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
export declare enum PostReconcileRefundResponseTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
export declare class PostReconcileRefundResponse extends SpeakeasyBase {
    accountId?: string;
    amount?: number;
    cancelledOn?: Date;
    comment?: string;
    createdById?: string;
    createdDate?: Date;
    creditMemoId?: string;
    financeInformation?: PostReconcileRefundResponseFinanceInformation;
    gatewayId?: string;
    gatewayReconciliationReason?: string;
    gatewayReconciliationStatus?: string;
    gatewayResponse?: string;
    gatewayResponseCode?: string;
    gatewayState?: PostReconcileRefundResponseGatewayStateEnum;
    id?: string;
    markedForSubmissionOn?: Date;
    methodType?: PostReconcileRefundResponseMethodTypeEnum;
    number?: string;
    paymentId?: string;
    paymentMethodId?: string;
    paymentMethodSnapshotId?: string;
    payoutId?: string;
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
    type?: PostReconcileRefundResponseTypeEnum;
    updatedById?: string;
    updatedDate?: Date;
}
