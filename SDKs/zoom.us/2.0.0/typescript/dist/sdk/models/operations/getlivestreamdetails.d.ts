import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLiveStreamDetailsRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the meeting.
     */
    meetingId: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Live Stream details returned.
 *
 *
 */
export declare class GetLiveStreamDetails200ApplicationXML extends SpeakeasyBase {
    /**
     * Live streaming page URL. This is the URL using which anyone can view the live stream of the meeting.
     */
    pageUrl?: string;
    /**
     * Stream Key.
     */
    streamKey?: string;
    /**
     * Stream URL.
     */
    streamUrl?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Live Stream details returned.
 *
 *
 */
export declare class GetLiveStreamDetails200ApplicationJSON extends SpeakeasyBase {
    /**
     * Live streaming page URL. This is the URL using which anyone can view the live stream of the meeting.
     */
    pageUrl?: string;
    /**
     * Stream Key.
     */
    streamKey?: string;
    /**
     * Stream URL.
     */
    streamUrl?: string;
}
export declare class GetLiveStreamDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Live Stream details returned.
     *
     *
     */
    getLiveStreamDetails200ApplicationJSONObject?: GetLiveStreamDetails200ApplicationJSON;
}
