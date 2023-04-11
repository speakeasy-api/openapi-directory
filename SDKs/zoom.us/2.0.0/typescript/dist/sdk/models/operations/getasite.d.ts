import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetASiteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetASiteRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Site.
     */
    siteId: string;
}
/**
 * Site country
 */
export declare class GetASite200ApplicationXMLCountry extends SpeakeasyBase {
    /**
     * Two lettered country [code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
     */
    code?: string;
    /**
     * Name of the country.
     */
    name?: string;
}
/**
 * [Main Auto Receptionist](https://support.zoom.us/hc/en-us/articles/360021121312#h_bc7ff1d5-0e6c-40cd-b889-62010cb98c57) for each site.
 */
export declare class GetASite200ApplicationXMLMainAutoReceptionist extends SpeakeasyBase {
    /**
     * Extension ID
     */
    extensionId?: string;
    /**
     * Extension number
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Auto Receptionist.
     */
    id?: string;
    /**
     * Name of the auto receptionist.
     */
    name?: string;
}
/**
 * Short extension of the phone site.
 */
export declare class GetASite200ApplicationXMLShortExtension extends SpeakeasyBase {
    /**
     * The length of short extension number for the site.
     */
    length?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Site information retrieved successfully.
 */
export declare class GetASite200ApplicationXML extends SpeakeasyBase {
    /**
     * Site country
     */
    country?: GetASite200ApplicationXMLCountry;
    /**
     * Site ID. Unique Identifier of the site.
     */
    id?: string;
    /**
     * [Main Auto Receptionist](https://support.zoom.us/hc/en-us/articles/360021121312#h_bc7ff1d5-0e6c-40cd-b889-62010cb98c57) for each site.
     */
    mainAutoReceptionist?: GetASite200ApplicationXMLMainAutoReceptionist;
    /**
     * Name of the Site.
     */
    name?: string;
    /**
     * Short extension of the phone site.
     */
    shortExtension?: GetASite200ApplicationXMLShortExtension;
    /**
     * [Site Code](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites#h_79ca9c8f-c97b-4486-aa59-d0d9d31a525b)
     */
    siteCode?: number;
}
/**
 * Site country
 */
export declare class GetASite200ApplicationJSONCountry extends SpeakeasyBase {
    /**
     * Two lettered country [code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
     */
    code?: string;
    /**
     * Name of the country.
     */
    name?: string;
}
/**
 * [Main Auto Receptionist](https://support.zoom.us/hc/en-us/articles/360021121312#h_bc7ff1d5-0e6c-40cd-b889-62010cb98c57) for each site.
 */
export declare class GetASite200ApplicationJSONMainAutoReceptionist extends SpeakeasyBase {
    /**
     * Extension ID
     */
    extensionId?: string;
    /**
     * Extension number
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Auto Receptionist.
     */
    id?: string;
    /**
     * Name of the auto receptionist.
     */
    name?: string;
}
/**
 * Short extension of the phone site.
 */
export declare class GetASite200ApplicationJSONShortExtension extends SpeakeasyBase {
    /**
     * The length of short extension number for the site.
     */
    length?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Site information retrieved successfully.
 */
export declare class GetASite200ApplicationJSON extends SpeakeasyBase {
    /**
     * Site country
     */
    country?: GetASite200ApplicationJSONCountry;
    /**
     * Site ID. Unique Identifier of the site.
     */
    id?: string;
    /**
     * [Main Auto Receptionist](https://support.zoom.us/hc/en-us/articles/360021121312#h_bc7ff1d5-0e6c-40cd-b889-62010cb98c57) for each site.
     */
    mainAutoReceptionist?: GetASite200ApplicationJSONMainAutoReceptionist;
    /**
     * Name of the Site.
     */
    name?: string;
    /**
     * Short extension of the phone site.
     */
    shortExtension?: GetASite200ApplicationJSONShortExtension;
    /**
     * [Site Code](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites#h_79ca9c8f-c97b-4486-aa59-d0d9d31a525b)
     */
    siteCode?: number;
}
export declare class GetASiteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Site information retrieved successfully.
     */
    getASite200ApplicationJSONObject?: GetASite200ApplicationJSON;
}
