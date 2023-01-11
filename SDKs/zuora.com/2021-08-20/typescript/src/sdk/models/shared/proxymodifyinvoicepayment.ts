import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyModifyInvoicePayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;
}
