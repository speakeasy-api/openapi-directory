import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum {
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
export declare class PostSettlePaymentResponseFinanceInformation extends SpeakeasyBase {
    bankAccountAccountingCode?: string;
    bankAccountAccountingCodeType?: string;
    transferredToAccounting?: PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum;
    unappliedPaymentAccountingCode?: string;
    unappliedPaymentAccountingCodeType?: string;
}
export declare enum PostSettlePaymentResponseGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}
export declare enum PostSettlePaymentResponseTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
export declare class PostSettlePaymentResponse extends SpeakeasyBase {
    accountId?: string;
    amount?: number;
    appliedAmount?: number;
    authTransactionId?: string;
    bankIdentificationNumber?: string;
    cancelledOn?: Date;
    comment?: string;
    createdById?: string;
    createdDate?: Date;
    creditBalanceAmount?: number;
    currency?: string;
    effectiveDate?: Date;
    financeInformation?: PostSettlePaymentResponseFinanceInformation;
    gatewayId?: string;
    gatewayOrderId?: string;
    gatewayResponse?: string;
    gatewayResponseCode?: string;
    gatewayState?: PostSettlePaymentResponseGatewayStateEnum;
    id?: string;
    markedForSubmissionOn?: Date;
    number?: string;
    paymentMethodId?: string;
    paymentMethodSnapshotId?: string;
    referenceId?: string;
    refundAmount?: number;
    secondPaymentReferenceId?: string;
    settledOn?: Date;
    softDescriptor?: string;
    softDescriptorPhone?: string;
    status?: string;
    submittedOn?: Date;
    success?: boolean;
    type?: PostSettlePaymentResponseTypeEnum;
    unappliedAmount?: number;
    updatedById?: string;
    updatedDate?: Date;
}
