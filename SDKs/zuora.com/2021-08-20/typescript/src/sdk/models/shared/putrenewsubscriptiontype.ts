import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRenewSubscriptionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationOrder" })
  applicationOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=applyCredit" })
  applyCredit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=applyCreditBalance" })
  applyCreditBalance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=collect" })
  collect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=documentDate" })
  documentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoice" })
  invoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=invoiceCollect" })
  invoiceCollect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=invoiceTargetDate" })
  invoiceTargetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=runBilling" })
  runBilling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate?: Date;
}
