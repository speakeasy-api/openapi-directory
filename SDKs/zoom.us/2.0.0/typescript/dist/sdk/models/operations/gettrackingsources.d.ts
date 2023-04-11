import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTrackingSourcesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetTrackingSourcesRequest extends SpeakeasyBase {
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class GetTrackingSources200ApplicationXMLTrackingSources extends SpeakeasyBase {
    /**
     * Unique Identifier of the tracking source.
     */
    id?: string;
    /**
     * Number of registrations made from this source.
     */
    registrationCount?: number;
    /**
     * Name of the source (platform) where the registration URL was shared.
     */
    sourceName?: string;
    /**
     * Tracking URL. The URL that was shared for the registration.
     */
    trackingUrl?: string;
    /**
     * Number of visitors who visited the registration page from this source.
     */
    visitorCount?: number;
}
/**
 * **HTTP Status Code:** `200`
 */
export declare class GetTrackingSources200ApplicationXML extends SpeakeasyBase {
    /**
     * The total number of registration records for this Webinar.
     */
    totalRecords?: number;
    /**
     * Tracking Sources object.
     */
    trackingSources?: GetTrackingSources200ApplicationXMLTrackingSources[];
}
export declare class GetTrackingSources200ApplicationJSONTrackingSources extends SpeakeasyBase {
    /**
     * Unique Identifier of the tracking source.
     */
    id?: string;
    /**
     * Number of registrations made from this source.
     */
    registrationCount?: number;
    /**
     * Name of the source (platform) where the registration URL was shared.
     */
    sourceName?: string;
    /**
     * Tracking URL. The URL that was shared for the registration.
     */
    trackingUrl?: string;
    /**
     * Number of visitors who visited the registration page from this source.
     */
    visitorCount?: number;
}
/**
 * **HTTP Status Code:** `200`
 */
export declare class GetTrackingSources200ApplicationJSON extends SpeakeasyBase {
    /**
     * The total number of registration records for this Webinar.
     */
    totalRecords?: number;
    /**
     * Tracking Sources object.
     */
    trackingSources?: GetTrackingSources200ApplicationJSONTrackingSources[];
}
export declare class GetTrackingSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`
     */
    getTrackingSources200ApplicationJSONObject?: GetTrackingSources200ApplicationJSON;
}
