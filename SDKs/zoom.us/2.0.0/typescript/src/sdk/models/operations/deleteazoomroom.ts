import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAZoomRoomPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class DeleteAZoomRoomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DeleteAZoomRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAZoomRoomPathParams;

  @SpeakeasyMetadata()
  security: DeleteAZoomRoomSecurity;
}


export class DeleteAZoomRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteAZoomRoom204ApplicationJSONObject?: Record<string, any>;
}
