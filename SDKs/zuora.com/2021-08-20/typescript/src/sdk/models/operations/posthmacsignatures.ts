import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostHmacSignaturesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostHmacSignaturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostHmacSignaturesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PosthmacSignatureType;
}


export class PostHmacSignaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  posthmacSignatureResponseType?: shared.PosthmacSignatureResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
