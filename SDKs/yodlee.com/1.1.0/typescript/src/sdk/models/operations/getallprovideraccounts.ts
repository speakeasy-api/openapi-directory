import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllProviderAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=providerIds" })
  providerIds?: string;
}


export class GetAllProviderAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllProviderAccountsQueryParams;
}


export class GetAllProviderAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  providerAccountResponse?: shared.ProviderAccountResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
