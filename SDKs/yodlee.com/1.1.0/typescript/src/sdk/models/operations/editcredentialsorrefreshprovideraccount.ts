import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditCredentialsOrRefreshProviderAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=providerAccountIds" })
  providerAccountIds: string;
}


export class EditCredentialsOrRefreshProviderAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EditCredentialsOrRefreshProviderAccountQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ProviderAccountRequestInput;
}


export class EditCredentialsOrRefreshProviderAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatedProviderAccountResponse?: shared.UpdatedProviderAccountResponse;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
