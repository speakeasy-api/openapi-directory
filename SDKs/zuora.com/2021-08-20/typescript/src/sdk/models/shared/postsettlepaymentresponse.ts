import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}


// PostSettlePaymentResponseFinanceInformation
/** 
 * Container for the finance information related to the refund.
 * 
**/
export class PostSettlePaymentResponseFinanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankAccountAccountingCode" })
  bankAccountAccountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=bankAccountAccountingCodeType" })
  bankAccountAccountingCodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=transferredToAccounting" })
  transferredToAccounting?: PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum;

  @SpeakeasyMetadata({ data: "json, name=unappliedPaymentAccountingCode" })
  unappliedPaymentAccountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=unappliedPaymentAccountingCodeType" })
  unappliedPaymentAccountingCodeType?: string;
}

export enum PostSettlePaymentResponseGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}

export enum PostSettlePaymentResponseTypeEnum {
    External = "External",
    Electronic = "Electronic"
}


export class PostSettlePaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=appliedAmount" })
  appliedAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=authTransactionId" })
  authTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=bankIdentificationNumber" })
  bankIdentificationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelledOn" })
  cancelledOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creditBalanceAmount" })
  creditBalanceAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=financeInformation" })
  financeInformation?: PostSettlePaymentResponseFinanceInformation;

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayOrderId" })
  gatewayOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayResponse" })
  gatewayResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayResponseCode" })
  gatewayResponseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayState" })
  gatewayState?: PostSettlePaymentResponseGatewayStateEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=markedForSubmissionOn" })
  markedForSubmissionOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodSnapshotId" })
  paymentMethodSnapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=refundAmount" })
  refundAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=secondPaymentReferenceId" })
  secondPaymentReferenceId?: string;

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
  type?: PostSettlePaymentResponseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unappliedAmount" })
  unappliedAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate?: Date;
}
