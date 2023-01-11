import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateChannelPathParams extends SpeakeasyBase {
    channelId: string;
    userId: string;
}
export declare class UpdateChannelApplicationJson extends SpeakeasyBase {
    name: string;
}
export declare class UpdateChannelMultipartFormData extends SpeakeasyBase {
    name: string;
}
export declare class UpdateChannelRequests extends SpeakeasyBase {
    object?: UpdateChannelApplicationJson;
    object1?: UpdateChannelMultipartFormData;
}
export declare class UpdateChannelSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    pathParams: UpdateChannelPathParams;
    request?: UpdateChannelRequests;
    security: UpdateChannelSecurity;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateChannel204ApplicationJSONAny?: any;
}
