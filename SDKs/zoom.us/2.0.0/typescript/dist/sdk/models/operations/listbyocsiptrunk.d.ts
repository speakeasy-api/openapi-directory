import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListBYOCSIPTrunkSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListBYOCSIPTrunkRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
export declare class ListBYOCSIPTrunk200ApplicationXMLByocSipTrunk extends SpeakeasyBase {
    /**
     * Name of the carrier.
     */
    carrier?: string;
    /**
     * The account associated to the carrier.
     */
    carrierAccount?: string;
    /**
     * The unique SIP Trunk ID.
     */
    id?: string;
    /**
     * The display name of the SIP Trunk.
     */
    name?: string;
    /**
     * The region of the carrier.
     */
    region?: string;
    /**
     * The Session Border Controller (SBC) routing label.
     */
    sbcLabel?: string;
}
/**
 * **HTTP Status Codes**: `200`<br>
 *
 * @remarks
 * OK.
 */
export declare class ListBYOCSIPTrunk200ApplicationXML extends SpeakeasyBase {
    byocSipTrunk?: ListBYOCSIPTrunk200ApplicationXMLByocSipTrunk[];
    /**
     * Used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is **15 minutes**.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call. The default is **30**, and the maximum is **100**.
     */
    pageSize?: number;
}
export declare class ListBYOCSIPTrunk200ApplicationJSONByocSipTrunk extends SpeakeasyBase {
    /**
     * Name of the carrier.
     */
    carrier?: string;
    /**
     * The account associated to the carrier.
     */
    carrierAccount?: string;
    /**
     * The unique SIP Trunk ID.
     */
    id?: string;
    /**
     * The display name of the SIP Trunk.
     */
    name?: string;
    /**
     * The region of the carrier.
     */
    region?: string;
    /**
     * The Session Border Controller (SBC) routing label.
     */
    sbcLabel?: string;
}
/**
 * **HTTP Status Codes**: `200`<br>
 *
 * @remarks
 * OK.
 */
export declare class ListBYOCSIPTrunk200ApplicationJSON extends SpeakeasyBase {
    byocSipTrunk?: ListBYOCSIPTrunk200ApplicationJSONByocSipTrunk[];
    /**
     * Used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is **15 minutes**.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call. The default is **30**, and the maximum is **100**.
     */
    pageSize?: number;
}
export declare class ListBYOCSIPTrunkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Codes**: `200`<br>
     *
     * @remarks
     * OK.
     */
    listBYOCSIPTrunk200ApplicationJSONObject?: ListBYOCSIPTrunk200ApplicationJSON;
}
