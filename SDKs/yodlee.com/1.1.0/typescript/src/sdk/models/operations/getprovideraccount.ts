import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProviderAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerAccountId" })
  providerAccountId: number;
}


export class GetProviderAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" })
  requestId?: string;
}


export class GetProviderAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProviderAccountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProviderAccountQueryParams;
}


export class GetProviderAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  providerAccountDetailResponse?: shared.ProviderAccountDetailResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
