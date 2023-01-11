import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserLevelChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;
}


export class GetUserLevelChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// GetUserLevelChannel200ApplicationJson
/** 
 * The channel object represents a Zoom chat [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-). 
**/
export class GetUserLevelChannel200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


export class GetUserLevelChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserLevelChannelPathParams;

  @SpeakeasyMetadata()
  security: GetUserLevelChannelSecurity;
}


export class GetUserLevelChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUserLevelChannel200ApplicationJSONObject?: GetUserLevelChannel200ApplicationJson;
}
