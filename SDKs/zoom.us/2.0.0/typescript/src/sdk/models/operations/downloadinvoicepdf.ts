import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadInvoicePdfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: string;
}


export class DownloadInvoicePdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadInvoicePdfPathParams;
}


export class DownloadInvoicePdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  downloadInvoicePDF200ApplicationJSONAny?: any;
}
