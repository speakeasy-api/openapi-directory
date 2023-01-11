import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRsaSignaturesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostRsaSignaturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostRsaSignaturesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostrsaSignatureType;
}


export class PostRsaSignaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postrsaSignatureResponseType?: shared.PostrsaSignatureResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
