import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCancelAuthorizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-method-id" })
  paymentMethodId: string;
}


export class PostCancelAuthorizationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostCancelAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCancelAuthorizationPathParams;

  @SpeakeasyMetadata()
  headers: PostCancelAuthorizationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostVoidAuthorize;
}


export class PostCancelAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postVoidAuthorizeResponse?: shared.PostVoidAuthorizeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
