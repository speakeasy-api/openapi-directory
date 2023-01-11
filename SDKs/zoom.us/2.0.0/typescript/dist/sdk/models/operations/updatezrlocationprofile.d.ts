import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateZrLocationProfilePathParams extends SpeakeasyBase {
    locationId: string;
}
export declare class UpdateZrLocationProfileApplicationJsonBasic extends SpeakeasyBase {
    address?: string;
    description?: string;
    name?: string;
    requiredCodeToExt?: boolean;
    roomPasscode?: string;
    supportEmail?: string;
    supportPhone?: string;
    timezone?: string;
}
export declare class UpdateZrLocationProfileApplicationJson extends SpeakeasyBase {
    basic?: UpdateZrLocationProfileApplicationJsonBasic;
}
export declare class UpdateZrLocationProfileMultipartFormDataBasic extends SpeakeasyBase {
    address?: string;
    description?: string;
    name?: string;
    requiredCodeToExt?: boolean;
    roomPasscode?: string;
    supportEmail?: string;
    supportPhone?: string;
    timezone?: string;
}
export declare class UpdateZrLocationProfileMultipartFormData extends SpeakeasyBase {
    basic?: UpdateZrLocationProfileMultipartFormDataBasic;
}
export declare class UpdateZrLocationProfileRequests extends SpeakeasyBase {
    object?: UpdateZrLocationProfileApplicationJson;
    object1?: UpdateZrLocationProfileMultipartFormData;
}
export declare class UpdateZrLocationProfileSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateZrLocationProfileRequest extends SpeakeasyBase {
    pathParams: UpdateZrLocationProfilePathParams;
    request?: UpdateZrLocationProfileRequests;
    security: UpdateZrLocationProfileSecurity;
}
export declare class UpdateZrLocationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateZRLocationProfile200ApplicationJSONAny?: any;
}
