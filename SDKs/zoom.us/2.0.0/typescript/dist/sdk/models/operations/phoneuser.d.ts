import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PhoneUserSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class PhoneUser200ApplicationJsonCallingPlan extends SpeakeasyBase {
    type?: number;
}
export declare class PhoneUser200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare enum PhoneUser200ApplicationJsonStatusEnum {
    Activate = "activate",
    Deactivate = "deactivate"
}
/**
 * Zoom User Profile
**/
export declare class PhoneUser200ApplicationJson extends SpeakeasyBase {
    callingPlan?: PhoneUser200ApplicationJsonCallingPlan[];
    email?: string;
    extensionNumber?: number;
    id?: string;
    phoneNumbers?: PhoneUser200ApplicationJsonPhoneNumbers[];
    phoneUserId?: string;
    siteAdmin?: boolean;
    siteId?: string;
    status?: PhoneUser200ApplicationJsonStatusEnum;
}
export declare class PhoneUserRequest extends SpeakeasyBase {
    pathParams: PhoneUserPathParams;
    security: PhoneUserSecurity;
}
export declare class PhoneUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    phoneUser200ApplicationJSONObject?: PhoneUser200ApplicationJson;
}
