import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneUserSettingsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PhoneUserSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions extends SpeakeasyBase {
    primaryNumber?: string;
}
/**
 * Contains information on phones or devices provisioned for the user.
**/
export declare class PhoneUserSettings200ApplicationJsonDeskPhone extends SpeakeasyBase {
    keysPositions?: PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions;
}
/**
 * Outbound Caller Info
**/
export declare class PhoneUserSettings200ApplicationJsonOutboundCaller extends SpeakeasyBase {
    number?: string;
}
export declare class PhoneUserSettings200ApplicationJsonOutboundCallerIds extends SpeakeasyBase {
    isDefault?: boolean;
    name?: string;
    number?: string;
}
/**
 * [Shared voicemail access](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) assigned to user.
**/
export declare class PhoneUserSettings200ApplicationJsonVoiceMail extends SpeakeasyBase {
    accessUserId?: string;
    delete?: boolean;
    download?: boolean;
    sharedId?: string;
}
/**
 * Phone User Setting
**/
export declare class PhoneUserSettings200ApplicationJson extends SpeakeasyBase {
    areaCode?: string;
    companyNumber?: string;
    deskPhone?: PhoneUserSettings200ApplicationJsonDeskPhone;
    outboundCaller?: PhoneUserSettings200ApplicationJsonOutboundCaller;
    outboundCallerIds?: PhoneUserSettings200ApplicationJsonOutboundCallerIds;
    voiceMail?: PhoneUserSettings200ApplicationJsonVoiceMail;
}
export declare class PhoneUserSettingsRequest extends SpeakeasyBase {
    pathParams: PhoneUserSettingsPathParams;
    security: PhoneUserSettingsSecurity;
}
export declare class PhoneUserSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    phoneUserSettings200ApplicationJSONObject?: PhoneUserSettings200ApplicationJson;
}
