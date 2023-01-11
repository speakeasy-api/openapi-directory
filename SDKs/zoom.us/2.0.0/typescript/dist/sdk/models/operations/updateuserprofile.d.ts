import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserProfilePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UpdateUserProfileApplicationJson extends SpeakeasyBase {
    extensionNumber?: string;
    siteId?: string;
}
export declare class UpdateUserProfileMultipartFormData extends SpeakeasyBase {
    extensionNumber?: string;
    siteId?: string;
}
export declare class UpdateUserProfileRequests extends SpeakeasyBase {
    object?: UpdateUserProfileApplicationJson;
    object1?: UpdateUserProfileMultipartFormData;
}
export declare class UpdateUserProfileSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateUserProfileRequest extends SpeakeasyBase {
    pathParams: UpdateUserProfilePathParams;
    request?: UpdateUserProfileRequests;
    security: UpdateUserProfileSecurity;
}
export declare class UpdateUserProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateUserProfile204ApplicationJSONAny?: any;
}
