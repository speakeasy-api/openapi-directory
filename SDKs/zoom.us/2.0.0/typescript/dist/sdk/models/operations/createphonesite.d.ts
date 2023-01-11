import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePhoneSiteApplicationJsonDefaultEmergencyAddress extends SpeakeasyBase {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    country: string;
    stateCode: string;
    zip: string;
}
/**
 * Short extension of the phone site.
**/
export declare class CreatePhoneSiteApplicationJsonShortExtension extends SpeakeasyBase {
    length?: number;
}
export declare class CreatePhoneSiteApplicationJson extends SpeakeasyBase {
    autoReceptionistName: string;
    defaultEmergencyAddress?: CreatePhoneSiteApplicationJsonDefaultEmergencyAddress;
    name: string;
    shortExtension?: CreatePhoneSiteApplicationJsonShortExtension;
    siteCode?: number;
}
export declare class CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress extends SpeakeasyBase {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    country: string;
    stateCode: string;
    zip: string;
}
/**
 * Short extension of the phone site.
**/
export declare class CreatePhoneSiteMultipartFormDataShortExtension extends SpeakeasyBase {
    length?: number;
}
export declare class CreatePhoneSiteMultipartFormData extends SpeakeasyBase {
    autoReceptionistName: string;
    defaultEmergencyAddress?: CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress;
    name: string;
    shortExtension?: CreatePhoneSiteMultipartFormDataShortExtension;
    siteCode?: number;
}
export declare class CreatePhoneSiteRequests extends SpeakeasyBase {
    object?: CreatePhoneSiteApplicationJson;
    object1?: CreatePhoneSiteMultipartFormData;
}
export declare class CreatePhoneSiteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class CreatePhoneSite204ApplicationJson extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class CreatePhoneSiteRequest extends SpeakeasyBase {
    request?: CreatePhoneSiteRequests;
    security: CreatePhoneSiteSecurity;
}
export declare class CreatePhoneSiteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    createPhoneSite204ApplicationJSONObject?: CreatePhoneSite204ApplicationJson;
}
