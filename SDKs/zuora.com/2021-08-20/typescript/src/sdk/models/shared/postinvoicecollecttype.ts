import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInvoiceCollectType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountKey" })
  accountKey: string;

  @SpeakeasyMetadata({ data: "json, name=documentDate" })
  documentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoiceDate" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceTargetDate" })
  invoiceTargetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=paymentGateway" })
  paymentGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate?: Date;
}
