import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LeaveChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class LeaveChannelSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class LeaveChannelRequest extends SpeakeasyBase {
    pathParams: LeaveChannelPathParams;
    security: LeaveChannelSecurity;
}
export declare class LeaveChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    leaveChannel204ApplicationJSONAny?: any;
}
