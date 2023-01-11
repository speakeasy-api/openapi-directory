import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
