import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteABlockedListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blockedListId" })
  blockedListId: string;
}


export class DeleteABlockedListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DeleteABlockedListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteABlockedListPathParams;

  @SpeakeasyMetadata()
  security: DeleteABlockedListSecurity;
}


export class DeleteABlockedListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteABlockedList204ApplicationJSONAny?: any;
}
