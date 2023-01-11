import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendimmessagesQueryParams extends SpeakeasyBase {
    chatUser?: string;
}
export declare class SendimmessagesApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class SendimmessagesMultipartFormData extends SpeakeasyBase {
    message?: string;
}
export declare class SendimmessagesRequests extends SpeakeasyBase {
    object?: SendimmessagesApplicationJson;
    object1?: SendimmessagesMultipartFormData;
}
export declare class SendimmessagesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class Sendimmessages201ApplicationJson extends SpeakeasyBase {
    id?: string;
}
export declare class SendimmessagesRequest extends SpeakeasyBase {
    queryParams: SendimmessagesQueryParams;
    request?: SendimmessagesRequests;
    security: SendimmessagesSecurity;
}
export declare class SendimmessagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    sendimmessages201ApplicationJSONObject?: Sendimmessages201ApplicationJson;
}
