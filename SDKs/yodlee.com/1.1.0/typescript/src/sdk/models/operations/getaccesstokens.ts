import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccessTokensQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appIds" })
  appIds: string;
}


export class GetAccessTokensRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccessTokensQueryParams;
}


export class GetAccessTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userAccessTokensResponse?: shared.UserAccessTokensResponse;
}
