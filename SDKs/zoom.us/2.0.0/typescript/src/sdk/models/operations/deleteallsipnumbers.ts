import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAllSipNumbersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class DeleteAllSipNumbersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DeleteAllSipNumbersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAllSipNumbersPathParams;

  @SpeakeasyMetadata()
  security: DeleteAllSipNumbersSecurity;
}


export class DeleteAllSipNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteAllSipNumbers204ApplicationJSONAny?: any;
}
