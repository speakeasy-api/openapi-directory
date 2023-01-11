import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddCommonAreaPhoneRequestBody extends SpeakeasyBase {
    description?: string;
    displayName: string;
    extensionNumber: number;
    macAddress: string;
    model?: string;
    siteId?: string;
    timeZone?: string;
    type: string;
}
export declare class AddCommonAreaPhoneSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AddCommonAreaPhone201ApplicationJson extends SpeakeasyBase {
    displayName?: string;
    id?: string;
}
export declare class AddCommonAreaPhoneRequest extends SpeakeasyBase {
    request?: AddCommonAreaPhoneRequestBody;
    security: AddCommonAreaPhoneSecurity;
}
export declare class AddCommonAreaPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addCommonAreaPhone201ApplicationJSONObject?: AddCommonAreaPhone201ApplicationJson;
}
