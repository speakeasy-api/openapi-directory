import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserLevelChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetUserLevelChannelSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * The channel object represents a Zoom chat [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-).
**/
export declare class GetUserLevelChannel200ApplicationJson extends SpeakeasyBase {
    id?: string;
    name?: string;
    type?: number;
}
export declare class GetUserLevelChannelRequest extends SpeakeasyBase {
    pathParams: GetUserLevelChannelPathParams;
    security: GetUserLevelChannelSecurity;
}
export declare class GetUserLevelChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getUserLevelChannel200ApplicationJSONObject?: GetUserLevelChannel200ApplicationJson;
}
