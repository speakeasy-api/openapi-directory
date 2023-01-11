import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProviderAccountProfilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=providerAccountId" })
  providerAccountId?: string;
}


export class GetProviderAccountProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProviderAccountProfilesQueryParams;
}


export class GetProviderAccountProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  providerAccountUserProfileResponse?: shared.ProviderAccountUserProfileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
