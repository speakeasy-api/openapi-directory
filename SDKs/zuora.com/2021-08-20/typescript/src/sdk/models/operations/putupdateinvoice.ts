import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutUpdateInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: string;
}


export class PutUpdateInvoiceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutUpdateInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUpdateInvoicePathParams;

  @SpeakeasyMetadata()
  headers: PutUpdateInvoiceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PutUpdateInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putInvoiceResponseType?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
