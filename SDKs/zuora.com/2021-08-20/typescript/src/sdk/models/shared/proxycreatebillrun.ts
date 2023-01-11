import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyCreateBillRun extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=ChargeTypeToExclude" })
  chargeTypeToExclude?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceDate" })
  invoiceDate: Date;

  @SpeakeasyMetadata({ data: "json, name=NoEmailForZeroAmountInvoice" })
  noEmailForZeroAmountInvoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TargetDate" })
  targetDate: Date;
}
