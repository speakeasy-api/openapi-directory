import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInvoiceFileWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoices" })
  invoices?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
