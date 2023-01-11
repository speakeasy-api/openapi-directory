import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyGetBillRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoEmail" })
  autoEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoPost" })
  autoPost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoRenewal" })
  autoRenewal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Batch" })
  batch?: string;

  @SpeakeasyMetadata({ data: "json, name=BillCycleDay" })
  billCycleDay?: string;

  @SpeakeasyMetadata({ data: "json, name=BillRunNumber" })
  billRunNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExecutedDate" })
  executedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceDate" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=InvoicesEmailed" })
  invoicesEmailed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastEmailSentTime" })
  lastEmailSentTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NoEmailForZeroAmountInvoice" })
  noEmailForZeroAmountInvoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NumberOfAccounts" })
  numberOfAccounts?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfInvoices" })
  numberOfInvoices?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetDate" })
  targetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;
}
