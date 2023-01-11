import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostExpireStoredCredentialProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-method-id" })
  paymentMethodId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profile-number" })
  profileNumber: number;
}


export class PostExpireStoredCredentialProfileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostExpireStoredCredentialProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostExpireStoredCredentialProfilePathParams;

  @SpeakeasyMetadata()
  headers: PostExpireStoredCredentialProfileHeaders;
}


export class PostExpireStoredCredentialProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  modifiedStoredCredentialProfileResponse?: shared.ModifiedStoredCredentialProfileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
