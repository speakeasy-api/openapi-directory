import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStandaloneInvoiceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostStandaloneInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostStandaloneInvoiceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostStandaloneInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postInvoiceResponse?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
