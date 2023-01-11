import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoiceFile } from "./invoicefile";



export class GetInvoiceFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceFiles", elemType: InvoiceFile })
  invoiceFiles?: InvoiceFile[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
