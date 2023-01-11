import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserLevelChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class UpdateUserLevelChannelApplicationJson extends SpeakeasyBase {
    name: string;
}
export declare class UpdateUserLevelChannelMultipartFormData extends SpeakeasyBase {
    name: string;
}
export declare class UpdateUserLevelChannelRequests extends SpeakeasyBase {
    object?: UpdateUserLevelChannelApplicationJson;
    object1?: UpdateUserLevelChannelMultipartFormData;
}
export declare class UpdateUserLevelChannelSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateUserLevelChannelRequest extends SpeakeasyBase {
    pathParams: UpdateUserLevelChannelPathParams;
    request?: UpdateUserLevelChannelRequests;
    security: UpdateUserLevelChannelSecurity;
}
export declare class UpdateUserLevelChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateUserLevelChannel204ApplicationJSONAny?: any;
}
