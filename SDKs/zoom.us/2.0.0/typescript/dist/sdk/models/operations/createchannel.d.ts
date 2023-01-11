import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateChannelPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class CreateChannelApplicationJsonMembers extends SpeakeasyBase {
    email: string;
}
export declare class CreateChannelApplicationJson extends SpeakeasyBase {
    members?: CreateChannelApplicationJsonMembers[];
    name?: string;
    type?: number;
}
export declare class CreateChannelMultipartFormDataMembers extends SpeakeasyBase {
    email: string;
}
export declare class CreateChannelMultipartFormData1 extends SpeakeasyBase {
    members?: CreateChannelMultipartFormDataMembers[];
    name?: string;
    type?: number;
}
export declare class CreateChannelRequests extends SpeakeasyBase {
    object?: CreateChannelApplicationJson;
    object1?: CreateChannelMultipartFormData1;
}
export declare class CreateChannelSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class CreateChannel201ApplicationJson extends SpeakeasyBase {
    id?: string;
    jid?: string;
    name?: string;
    type?: number;
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    pathParams: CreateChannelPathParams;
    request?: CreateChannelRequests;
    security: CreateChannelSecurity;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    createChannel201ApplicationJSONObject?: CreateChannel201ApplicationJson;
}
