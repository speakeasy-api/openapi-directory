import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AdjustmentAmount" })
  adjustmentAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=AmountWithoutTax" })
  amountWithoutTax?: number;

  @SpeakeasyMetadata({ data: "json, name=Balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=BillRunId" })
  billRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=Comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreditBalanceAdjustmentAmount" })
  creditBalanceAdjustmentAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=DueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=IncludesOneTime" })
  includesOneTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludesRecurring" })
  includesRecurring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludesUsage" })
  includesUsage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InvoiceDate" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=InvoiceNumber" })
  invoiceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=LastEmailSentDate" })
  lastEmailSentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=PaymentAmount" })
  paymentAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=PostedBy" })
  postedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=PostedDate" })
  postedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=RefundAmount" })
  refundAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=RegenerateInvoicePDF" })
  regenerateInvoicePDF?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetDate" })
  targetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxExemptAmount" })
  taxExemptAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TransferredToAccounting" })
  transferredToAccounting?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;
}
