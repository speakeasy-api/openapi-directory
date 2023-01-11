import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendaChatMessagePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class SendaChatMessageApplicationJsonAtItems extends SpeakeasyBase {
    atContact?: string;
    atType?: number;
    endPosition?: number;
    startPosition?: number;
}
export declare class SendaChatMessageApplicationJson extends SpeakeasyBase {
    atItems?: SendaChatMessageApplicationJsonAtItems[];
    message: string;
    toChannel?: string;
    toContact?: string;
}
export declare class SendaChatMessageMultipartFormDataAtItems extends SpeakeasyBase {
    atContact?: string;
    atType?: number;
    endPosition?: number;
    startPosition?: number;
}
export declare class SendaChatMessageMultipartFormData1 extends SpeakeasyBase {
    atItems?: SendaChatMessageMultipartFormDataAtItems[];
    message: string;
    toChannel?: string;
    toContact?: string;
}
export declare class SendaChatMessageRequests extends SpeakeasyBase {
    object?: SendaChatMessageApplicationJson;
    object1?: SendaChatMessageMultipartFormData1;
}
export declare class SendaChatMessageSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class SendaChatMessage201ApplicationJson extends SpeakeasyBase {
    id?: string;
}
export declare class SendaChatMessageRequest extends SpeakeasyBase {
    pathParams: SendaChatMessagePathParams;
    request?: SendaChatMessageRequests;
    security: SendaChatMessageSecurity;
}
export declare class SendaChatMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    sendaChatMessage201ApplicationJSONObject?: SendaChatMessage201ApplicationJson;
}
