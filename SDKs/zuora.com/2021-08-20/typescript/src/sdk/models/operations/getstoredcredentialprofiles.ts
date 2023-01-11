import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStoredCredentialProfilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-method-id" })
  paymentMethodId: string;
}


export class GetStoredCredentialProfilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAll" })
  includeAll?: boolean;
}


export class GetStoredCredentialProfilesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetStoredCredentialProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStoredCredentialProfilesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStoredCredentialProfilesQueryParams;

  @SpeakeasyMetadata()
  headers: GetStoredCredentialProfilesHeaders;
}


export class GetStoredCredentialProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getStoredCredentialProfilesResponse?: shared.GetStoredCredentialProfilesResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
