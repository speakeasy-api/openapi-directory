import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInvoiceItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceItems" })
  invoiceItems?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
