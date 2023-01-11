import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPaymentMethodsDecryptionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostPaymentMethodsDecryptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPaymentMethodsDecryptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostPaymentMethodDecryption;
}


export class PostPaymentMethodsDecryptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postPaymentMethodResponseDecryption?: shared.PostPaymentMethodResponseDecryption;

  @SpeakeasyMetadata()
  statusCode: number;
}
