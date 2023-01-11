import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyModifyBillRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvoiceDate" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: string;
}
