import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCreateStoredCredentialProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-method-id" })
  paymentMethodId: string;
}


export class PostCreateStoredCredentialProfileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostCreateStoredCredentialProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCreateStoredCredentialProfilePathParams;

  @SpeakeasyMetadata()
  headers: PostCreateStoredCredentialProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateStoredCredentialProfileRequest;
}


export class PostCreateStoredCredentialProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  modifiedStoredCredentialProfileResponse?: shared.ModifiedStoredCredentialProfileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
