import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditMessagePathParams extends SpeakeasyBase {
    messageId: string;
    userId: string;
}
export declare class EditMessageApplicationJson extends SpeakeasyBase {
    message?: string;
    toChannel?: string;
    toContact?: string;
}
export declare class EditMessageMultipartFormData extends SpeakeasyBase {
    message?: string;
    toChannel?: string;
    toContact?: string;
}
export declare class EditMessageRequests extends SpeakeasyBase {
    object?: EditMessageApplicationJson;
    object1?: EditMessageMultipartFormData;
}
export declare class EditMessageSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class EditMessageRequest extends SpeakeasyBase {
    pathParams: EditMessagePathParams;
    request?: EditMessageRequests;
    security: EditMessageSecurity;
}
export declare class EditMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
