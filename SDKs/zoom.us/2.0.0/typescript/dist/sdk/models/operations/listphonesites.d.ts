import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPhoneSitesRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
/**
 * Site country
 */
export declare class ListPhoneSites200ApplicationXMLSitesCountry extends SpeakeasyBase {
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
 * Auto Receptionist for each site.
 */
export declare class ListPhoneSites200ApplicationXMLSitesMainAutoReceptionist extends SpeakeasyBase {
    /**
     * Extension ID
     */
    extensionId?: string;
    /**
     * Extension number
     */
    extensionNumber?: string;
    /**
     * Identifier of the [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-).
     */
    id?: string;
    /**
     * Name of the auto receptionist.
     */
    name?: string;
}
export declare class ListPhoneSites200ApplicationXMLSites extends SpeakeasyBase {
    /**
     * Site country
     */
    country?: ListPhoneSites200ApplicationXMLSitesCountry;
    /**
     * Site ID. Unique Identifier of the site.
     */
    id?: string;
    /**
     * Auto Receptionist for each site.
     */
    mainAutoReceptionist?: ListPhoneSites200ApplicationXMLSitesMainAutoReceptionist;
    /**
     * Name of the Site.
     */
    name?: string;
    /**
     * Site Code
     */
    siteCode?: string;
}
export declare class ListPhoneSites200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: string;
    /**
     * List of site(s).
     */
    sites?: ListPhoneSites200ApplicationXMLSites[];
    /**
     * Total number of records returned.
     */
    totalRecords?: string;
}
/**
 * Site country
 */
export declare class ListPhoneSites200ApplicationJSONSitesCountry extends SpeakeasyBase {
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
 * Auto Receptionist for each site.
 */
export declare class ListPhoneSites200ApplicationJSONSitesMainAutoReceptionist extends SpeakeasyBase {
    /**
     * Extension ID
     */
    extensionId?: string;
    /**
     * Extension number
     */
    extensionNumber?: string;
    /**
     * Identifier of the [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-).
     */
    id?: string;
    /**
     * Name of the auto receptionist.
     */
    name?: string;
}
export declare class ListPhoneSites200ApplicationJSONSites extends SpeakeasyBase {
    /**
     * Site country
     */
    country?: ListPhoneSites200ApplicationJSONSitesCountry;
    /**
     * Site ID. Unique Identifier of the site.
     */
    id?: string;
    /**
     * Auto Receptionist for each site.
     */
    mainAutoReceptionist?: ListPhoneSites200ApplicationJSONSitesMainAutoReceptionist;
    /**
     * Name of the Site.
     */
    name?: string;
    /**
     * Site Code
     */
    siteCode?: string;
}
export declare class ListPhoneSites200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: string;
    /**
     * List of site(s).
     */
    sites?: ListPhoneSites200ApplicationJSONSites[];
    /**
     * Total number of records returned.
     */
    totalRecords?: string;
}
export declare class ListPhoneSitesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listPhoneSites200ApplicationJSONObject?: ListPhoneSites200ApplicationJSON;
}
