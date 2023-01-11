import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePreferencesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerAccountId" })
  providerAccountId: number;
}


export class UpdatePreferencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePreferencesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProviderAccountPreferencesRequest;
}


export class UpdatePreferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
