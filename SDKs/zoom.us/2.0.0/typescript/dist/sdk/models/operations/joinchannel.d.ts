import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JoinChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class JoinChannelSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class JoinChannel201ApplicationJson extends SpeakeasyBase {
    addedAt?: Date;
    id?: string;
}
export declare class JoinChannelRequest extends SpeakeasyBase {
    pathParams: JoinChannelPathParams;
    security: JoinChannelSecurity;
}
export declare class JoinChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    joinChannel201ApplicationJSONObject?: JoinChannel201ApplicationJson;
}
