import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PhoneUserSettingsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class PhoneUserSettingsRequest extends SpeakeasyBase {
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class PhoneUserSettings200ApplicationXMLDeskPhoneKeysPositions extends SpeakeasyBase {
    /**
     * Primary number of the user.
     */
    primaryNumber?: string;
}
/**
 * Contains information on phones or devices provisioned for the user.
 */
export declare class PhoneUserSettings200ApplicationXMLDeskPhone extends SpeakeasyBase {
    keysPositions?: PhoneUserSettings200ApplicationXMLDeskPhoneKeysPositions;
}
/**
 * Outbound Caller Info
 */
export declare class PhoneUserSettings200ApplicationXMLOutboundCaller extends SpeakeasyBase {
    /**
     * Outbound calling number
     */
    number?: string;
}
export declare class PhoneUserSettings200ApplicationXMLOutboundCallerIds extends SpeakeasyBase {
    /**
     * Whether the outbound caller ID is the default or not. If `true`, the outbound caller ID is the default caller ID.
     */
    isDefault?: boolean;
    /**
     * Outbound caller name.
     */
    name?: string;
    /**
     * Outbound caller number.
     */
    number?: string;
}
/**
 * [Shared voicemail access](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) assigned to user.
 */
export declare class PhoneUserSettings200ApplicationXMLVoiceMail extends SpeakeasyBase {
    /**
     * The user that is allowed to access voicemail messages for the extension.
     */
    accessUserId?: string;
    /**
     * Specifies whether the user has delete permissions. The default is **false**.
     */
    delete?: boolean;
    /**
     * Specifies whether the user has download permissions. The default is **false**.
     */
    download?: boolean;
    /**
     * Unique identifier of the shared voicemail that the user can access.
     */
    sharedId?: string;
}
/**
 * Phone User Setting
 */
export declare class PhoneUserSettings200ApplicationXML extends SpeakeasyBase {
    /**
     * Area Code of User
     */
    areaCode?: string;
    /**
     * The [company number](https://support.zoom.us/hc/en-us/articles/360028553691) can be used by external callers to reach your phone users (by dialing the main company number and the user's extension). It can also be used by phone users as their caller ID when making calls.
     */
    companyNumber?: string;
    /**
     * Contains information on phones or devices provisioned for the user.
     */
    deskPhone?: PhoneUserSettings200ApplicationXMLDeskPhone;
    /**
     * Outbound Caller Info
     */
    outboundCaller?: PhoneUserSettings200ApplicationXMLOutboundCaller;
    outboundCallerIds?: PhoneUserSettings200ApplicationXMLOutboundCallerIds;
    /**
     * [Shared voicemail access](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) assigned to user.
     */
    voiceMail?: PhoneUserSettings200ApplicationXMLVoiceMail;
}
export declare class PhoneUserSettings200ApplicationJSONDeskPhoneKeysPositions extends SpeakeasyBase {
    /**
     * Primary number of the user.
     */
    primaryNumber?: string;
}
/**
 * Contains information on phones or devices provisioned for the user.
 */
export declare class PhoneUserSettings200ApplicationJSONDeskPhone extends SpeakeasyBase {
    keysPositions?: PhoneUserSettings200ApplicationJSONDeskPhoneKeysPositions;
}
/**
 * Outbound Caller Info
 */
export declare class PhoneUserSettings200ApplicationJSONOutboundCaller extends SpeakeasyBase {
    /**
     * Outbound calling number
     */
    number?: string;
}
export declare class PhoneUserSettings200ApplicationJSONOutboundCallerIds extends SpeakeasyBase {
    /**
     * Whether the outbound caller ID is the default or not. If `true`, the outbound caller ID is the default caller ID.
     */
    isDefault?: boolean;
    /**
     * Outbound caller name.
     */
    name?: string;
    /**
     * Outbound caller number.
     */
    number?: string;
}
/**
 * [Shared voicemail access](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) assigned to user.
 */
export declare class PhoneUserSettings200ApplicationJSONVoiceMail extends SpeakeasyBase {
    /**
     * The user that is allowed to access voicemail messages for the extension.
     */
    accessUserId?: string;
    /**
     * Specifies whether the user has delete permissions. The default is **false**.
     */
    delete?: boolean;
    /**
     * Specifies whether the user has download permissions. The default is **false**.
     */
    download?: boolean;
    /**
     * Unique identifier of the shared voicemail that the user can access.
     */
    sharedId?: string;
}
/**
 * Phone User Setting
 */
export declare class PhoneUserSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Area Code of User
     */
    areaCode?: string;
    /**
     * The [company number](https://support.zoom.us/hc/en-us/articles/360028553691) can be used by external callers to reach your phone users (by dialing the main company number and the user's extension). It can also be used by phone users as their caller ID when making calls.
     */
    companyNumber?: string;
    /**
     * Contains information on phones or devices provisioned for the user.
     */
    deskPhone?: PhoneUserSettings200ApplicationJSONDeskPhone;
    /**
     * Outbound Caller Info
     */
    outboundCaller?: PhoneUserSettings200ApplicationJSONOutboundCaller;
    outboundCallerIds?: PhoneUserSettings200ApplicationJSONOutboundCallerIds;
    /**
     * [Shared voicemail access](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) assigned to user.
     */
    voiceMail?: PhoneUserSettings200ApplicationJSONVoiceMail;
}
export declare class PhoneUserSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * User Setting object returned.
     */
    phoneUserSettings200ApplicationJSONObject?: PhoneUserSettings200ApplicationJSON;
}
