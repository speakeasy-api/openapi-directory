import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInvoiceCollectInvoicesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceAmount" })
  invoiceAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceNumber" })
  invoiceNumber?: string;
}
