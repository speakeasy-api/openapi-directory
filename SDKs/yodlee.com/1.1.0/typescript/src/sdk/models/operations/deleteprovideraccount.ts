import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteProviderAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerAccountId" })
  providerAccountId: number;
}


export class DeleteProviderAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProviderAccountPathParams;
}


export class DeleteProviderAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
