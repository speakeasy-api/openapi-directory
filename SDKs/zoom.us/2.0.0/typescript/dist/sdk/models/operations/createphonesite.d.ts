import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePhoneSiteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class CreatePhoneSiteApplicationJSONDefaultEmergencyAddress extends SpeakeasyBase {
    /**
     * Address Line 1 of the  [emergency address](https://support.zoom.us/hc/en-us/articles/360021062871-Setting-an-Emergency-Address) consisting of house number and street name.
     */
    addressLine1: string;
    /**
     * Address Line 2 of the [emergency address](https://support.zoom.us/hc/en-us/articles/360021062871-Setting-an-Emergency-Address) consisting of Building number, floor number, unit, etc.
     */
    addressLine2?: string;
    /**
     * City of the [emergency address](https://support.zoom.us/hc/en-us/articles/360021062871-Setting-an-Emergency-Address).
     */
    city: string;
    /**
     * Two lettered country code (Aplha-2 code in ISO-3166) standard of the Site's [emergency address](https://support.zoom.us/hc/en-us/articles/360021062871-Setting-an-Emergency-Address).
     */
    country: string;
    /**
     * State Code of the [emergency address](https://support.zoom.us/hc/en-us/articles/360021062871-Setting-an-Emergency-Address).
     */
    stateCode: string;
    /**
     * Zip Code of the [emergency address](https://support.zoom.us/hc/en-us/articles/360021062871-Setting-an-Emergency-Address).
     */
    zip: string;
}
/**
 * Short extension of the phone site.
 */
export declare class CreatePhoneSiteApplicationJSONShortExtension extends SpeakeasyBase {
    /**
     * Specify the length of short extension numbers for the site.
     *
     * @remarks
     *
     * Since there is a default 6-digit limit on extensions, the short extension can be 2 to 5 digits and the length of site code added to the length of short extension can not exceed a value of `6` (i.e., length of `site_code`+ length of `short_extension` should always be less than or equal to 6).
     */
    length?: number;
}
export declare class CreatePhoneSiteApplicationJSON extends SpeakeasyBase {
    /**
     * Display name of the [auto-receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Integrated-Voice-Response-IVR-) for the site.
     */
    autoReceptionistName: string;
    defaultEmergencyAddress?: CreatePhoneSiteApplicationJSONDefaultEmergencyAddress;
    /**
     * Name of the Site.
     */
    name: string;
    /**
     * Short extension of the phone site.
     */
    shortExtension?: CreatePhoneSiteApplicationJSONShortExtension;
    /**
     * Identifier for a site. If site code is enabled, this field is required.
     *
     * @remarks
     *
     *
     */
    siteCode?: number;
}
/**
 * **HTTP Status Code:** `204` **No Content**<br>
 *
 * @remarks
 * Site created successfully.
 */
export declare class CreatePhoneSite204ApplicationXML extends SpeakeasyBase {
    /**
     * Site ID: Unique Identifier of a site.
     */
    id?: string;
    /**
     * Name of the site.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `204` **No Content**<br>
 *
 * @remarks
 * Site created successfully.
 */
export declare class CreatePhoneSite204ApplicationJSON extends SpeakeasyBase {
    /**
     * Site ID: Unique Identifier of a site.
     */
    id?: string;
    /**
     * Name of the site.
     */
    name?: string;
}
export declare class CreatePhoneSiteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Site created successfully.
     */
    createPhoneSite204ApplicationJSONObject?: CreatePhoneSite204ApplicationJSON;
}
