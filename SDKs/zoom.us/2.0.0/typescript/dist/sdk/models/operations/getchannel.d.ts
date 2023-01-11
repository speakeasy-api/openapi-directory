import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelPathParams extends SpeakeasyBase {
    channelId: string;
    userId: string;
}
export declare class GetChannelSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * The channel object represents a Zoom chat [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-).
**/
export declare class GetChannel200ApplicationJson extends SpeakeasyBase {
    id?: string;
    name?: string;
    type?: number;
}
export declare class GetChannelRequest extends SpeakeasyBase {
    pathParams: GetChannelPathParams;
    security: GetChannelSecurity;
}
export declare class GetChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getChannel200ApplicationJSONObject?: GetChannel200ApplicationJson;
}
