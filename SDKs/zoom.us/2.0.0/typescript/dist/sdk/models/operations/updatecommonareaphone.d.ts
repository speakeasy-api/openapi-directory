import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCommonAreaPhonePathParams extends SpeakeasyBase {
    commonAreaPhoneId: string;
}
export declare class UpdateCommonAreaPhoneApplicationJson extends SpeakeasyBase {
    displayName?: string;
    extensionNumber?: number;
    macAddress?: string;
    siteId?: string;
}
export declare class UpdateCommonAreaPhoneMultipartFormData extends SpeakeasyBase {
    displayName?: string;
    extensionNumber?: number;
    macAddress?: string;
    siteId?: string;
}
export declare class UpdateCommonAreaPhoneRequests extends SpeakeasyBase {
    object?: UpdateCommonAreaPhoneApplicationJson;
    object1?: UpdateCommonAreaPhoneMultipartFormData;
}
export declare class UpdateCommonAreaPhoneSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateCommonAreaPhoneRequest extends SpeakeasyBase {
    pathParams: UpdateCommonAreaPhonePathParams;
    request?: UpdateCommonAreaPhoneRequests;
    security: UpdateCommonAreaPhoneSecurity;
}
export declare class UpdateCommonAreaPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateCommonAreaPhone204ApplicationJSONAny?: any;
}
