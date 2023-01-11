import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}


// PostReconcileRefundResponseFinanceInformation
/** 
 * Container for the finance information related to the refund.
 * 
**/
export class PostReconcileRefundResponseFinanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccountAccountingCode" })
  bankAccountAccountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=bankAccountAccountingCodeType" })
  bankAccountAccountingCodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=transferredToAccounting" })
  transferredToAccounting?: PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum;

  @SpeakeasyMetadata({ data: "json, name=unappliedPaymentAccountingCode" })
  unappliedPaymentAccountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=unappliedPaymentAccountingCodeType" })
  unappliedPaymentAccountingCodeType?: string;
}

export enum PostReconcileRefundResponseGatewayStateEnum {
    Settled = "Settled",
    FailedToSettle = "FailedToSettle"
}

export enum PostReconcileRefundResponseMethodTypeEnum {
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

export enum PostReconcileRefundResponseTypeEnum {
    External = "External",
    Electronic = "Electronic"
}


export class PostReconcileRefundResponse extends SpeakeasyBase {
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
  financeInformation?: PostReconcileRefundResponseFinanceInformation;

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayReconciliationReason" })
  gatewayReconciliationReason?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayReconciliationStatus" })
  gatewayReconciliationStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayResponse" })
  gatewayResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayResponseCode" })
  gatewayResponseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayState" })
  gatewayState?: PostReconcileRefundResponseGatewayStateEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=markedForSubmissionOn" })
  markedForSubmissionOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=methodType" })
  methodType?: PostReconcileRefundResponseMethodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodSnapshotId" })
  paymentMethodSnapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutId" })
  payoutId?: string;

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
  type?: PostReconcileRefundResponseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate?: Date;
}
