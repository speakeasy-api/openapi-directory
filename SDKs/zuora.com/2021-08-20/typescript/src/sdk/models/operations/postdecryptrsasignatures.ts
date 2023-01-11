import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDecryptRsaSignaturesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostDecryptRsaSignaturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostDecryptRsaSignaturesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostDecryptionType;
}


export class PostDecryptRsaSignaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postDecryptResponseType?: shared.PostDecryptResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
