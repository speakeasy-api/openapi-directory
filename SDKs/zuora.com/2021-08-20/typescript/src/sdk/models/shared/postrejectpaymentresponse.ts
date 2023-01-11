import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}


// PostRejectPaymentResponseFinanceInformation
/** 
 * Container for the finance information related to the refund.
 * 
**/
export class PostRejectPaymentResponseFinanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccountAccountingCode" })
  bankAccountAccountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=bankAccountAccountingCodeType" })
  bankAccountAccountingCodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=transferredToAccounting" })
  transferredToAccounting?: PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum;

  @SpeakeasyMetadata({ data: "json, name=unappliedPaymentAccountingCode" })
  unappliedPaymentAccountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=unappliedPaymentAccountingCodeType" })
  unappliedPaymentAccountingCodeType?: string;
}

export enum PostRejectPaymentResponseGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}

export enum PostRejectPaymentResponseMethodTypeEnum {
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

export enum PostRejectPaymentResponseTypeEnum {
    External = "External",
    Electronic = "Electronic"
}


export class PostRejectPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=cancelledOn" })
  cancelledOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creditMemoId" })
  creditMemoId?: string;

  @SpeakeasyMetadata({ data: "json, name=financeInformation" })
  financeInformation?: PostRejectPaymentResponseFinanceInformation;

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayResponse" })
  gatewayResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayResponseCode" })
  gatewayResponseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayState" })
  gatewayState?: PostRejectPaymentResponseGatewayStateEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=markedForSubmissionOn" })
  markedForSubmissionOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=methodType" })
  methodType?: PostRejectPaymentResponseMethodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodSnapshotId" })
  paymentMethodSnapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonCode" })
  reasonCode?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=refundDate" })
  refundDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=refundTransactionTime" })
  refundTransactionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=secondRefundReferenceId" })
  secondRefundReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=settledOn" })
  settledOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=softDescriptor" })
  softDescriptor?: string;

  @SpeakeasyMetadata({ data: "json, name=softDescriptorPhone" })
  softDescriptorPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=submittedOn" })
  submittedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostRejectPaymentResponseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate?: Date;
}
