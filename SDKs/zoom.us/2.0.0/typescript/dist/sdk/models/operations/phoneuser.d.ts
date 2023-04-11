import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PhoneUserSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class PhoneUserRequest extends SpeakeasyBase {
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class PhoneUser200ApplicationXMLCallingPlan extends SpeakeasyBase {
    /**
     * The [type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) of calling plan.
     */
    type?: number;
}
export declare class PhoneUser200ApplicationXMLPhoneNumbers extends SpeakeasyBase {
    /**
     * Phone Number Id
     */
    id?: string;
    /**
     * Phone number
     */
    number?: string;
}
/**
 * The status of the user.<br>
 *
 * @remarks
 * `activate`: An active user. <br>
 * `deactivate`: User has been deactivated from the ZoomPhone system.
 */
export declare enum PhoneUser200ApplicationXMLStatusEnum {
    Activate = "activate",
    Deactivate = "deactivate"
}
/**
 * Zoom User Profile
 */
export declare class PhoneUser200ApplicationXML extends SpeakeasyBase {
    /**
     * Calling Plan of the user
     */
    callingPlan?: PhoneUser200ApplicationXMLCallingPlan[];
    /**
     * Email address of the user.
     */
    email?: string;
    /**
     * Extension number
     */
    extensionNumber?: number;
    /**
     * Zoom User Id.
     */
    id?: string;
    phoneNumbers?: PhoneUser200ApplicationXMLPhoneNumbers[];
    /**
     * Zoom Phone User Id.
     */
    phoneUserId?: string;
    /**
     * Indicates whether the user is a [site admin](https://support.zoom.us/hc/en-us/articles/360042099012) or not.
     */
    siteAdmin?: boolean;
    /**
     * Unique Identifier of a [site](https://support.zoom.us/hc/en-us/articles/360020809672).
     */
    siteId?: string;
    /**
     * The status of the user.<br>
     *
     * @remarks
     * `activate`: An active user. <br>
     * `deactivate`: User has been deactivated from the ZoomPhone system.
     */
    status?: PhoneUser200ApplicationXMLStatusEnum;
}
export declare class PhoneUser200ApplicationJSONCallingPlan extends SpeakeasyBase {
    /**
     * The [type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) of calling plan.
     */
    type?: number;
}
export declare class PhoneUser200ApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * Phone Number Id
     */
    id?: string;
    /**
     * Phone number
     */
    number?: string;
}
/**
 * The status of the user.<br>
 *
 * @remarks
 * `activate`: An active user. <br>
 * `deactivate`: User has been deactivated from the ZoomPhone system.
 */
export declare enum PhoneUser200ApplicationJSONStatusEnum {
    Activate = "activate",
    Deactivate = "deactivate"
}
/**
 * Zoom User Profile
 */
export declare class PhoneUser200ApplicationJSON extends SpeakeasyBase {
    /**
     * Calling Plan of the user
     */
    callingPlan?: PhoneUser200ApplicationJSONCallingPlan[];
    /**
     * Email address of the user.
     */
    email?: string;
    /**
     * Extension number
     */
    extensionNumber?: number;
    /**
     * Zoom User Id.
     */
    id?: string;
    phoneNumbers?: PhoneUser200ApplicationJSONPhoneNumbers[];
    /**
     * Zoom Phone User Id.
     */
    phoneUserId?: string;
    /**
     * Indicates whether the user is a [site admin](https://support.zoom.us/hc/en-us/articles/360042099012) or not.
     */
    siteAdmin?: boolean;
    /**
     * Unique Identifier of a [site](https://support.zoom.us/hc/en-us/articles/360020809672).
     */
    siteId?: string;
    /**
     * The status of the user.<br>
     *
     * @remarks
     * `activate`: An active user. <br>
     * `deactivate`: User has been deactivated from the ZoomPhone system.
     */
    status?: PhoneUser200ApplicationJSONStatusEnum;
}
export declare class PhoneUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` <br>User profile object returned.
     */
    phoneUser200ApplicationJSONObject?: PhoneUser200ApplicationJSON;
}
