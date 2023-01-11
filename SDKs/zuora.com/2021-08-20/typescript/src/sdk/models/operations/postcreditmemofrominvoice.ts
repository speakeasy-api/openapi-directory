import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCreditMemoFromInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: string;
}


export class PostCreditMemoFromInvoiceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class PostCreditMemoFromInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCreditMemoFromInvoicePathParams;

  @SpeakeasyMetadata()
  headers: PostCreditMemoFromInvoiceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostCreditMemoFromInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
