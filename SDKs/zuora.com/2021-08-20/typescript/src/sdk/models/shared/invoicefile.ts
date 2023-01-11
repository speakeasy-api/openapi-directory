import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pdfFileUrl" })
  pdfFileUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
