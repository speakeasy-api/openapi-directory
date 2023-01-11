import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutReverseInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: string;
}


export class PutReverseInvoiceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutReverseInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutReverseInvoicePathParams;

  @SpeakeasyMetadata()
  headers: PutReverseInvoiceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutReverseInvoiceType;
}


export class PutReverseInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putReverseInvoiceResponseType?: shared.PutReverseInvoiceResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
