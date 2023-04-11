import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardWebinarDetailSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The webinar type.
 */
export declare enum DashboardWebinarDetailTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarDetailRequest extends SpeakeasyBase {
    /**
     * The webinar type.
     */
    type?: DashboardWebinarDetailTypeEnum;
    /**
     * The webinar ID or the webinar UUID.  If a webinar ID is provided in the request instead of a UUID, the response will be for the latest webinar instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    webinarId: string;
}
export declare class DashboardWebinarDetailWebinarMetricsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the Webinar.
     */
    key?: string;
    /**
     * Value of the custom key associated with the Webinar.
     */
    value?: string;
}
/**
 * Webinar metric details.
 */
export declare class DashboardWebinarDetailWebinarMetrics extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the Webinar.
     */
    customKeys?: DashboardWebinarDetailWebinarMetricsCustomKeys[];
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Webinar duration, formatted as hh:mm:ss, for example: `10:00` for ten minutes.
     */
    duration?: string;
    /**
     * User email.
     */
    email?: string;
    /**
     * Webinar end time.
     */
    endTime?: Date;
    /**
     * Indicates whether or not TSP was used for the Webinar.
     */
    has3rdPartyAudio?: boolean;
    /**
     * Indicates whether or not PSTN was used for the Webinar.
     */
    hasPstn?: boolean;
    /**
     * Indicates whether or not recording was used for the Webinar.
     */
    hasRecording?: boolean;
    /**
     * Indicates whether or not screen sharing was used for the Webinar.
     */
    hasScreenShare?: boolean;
    /**
     * Indicates whether or not SIP was used for the Webinar.
     */
    hasSip?: boolean;
    /**
     * Indicates whether or not video was used for the Webinar.
     */
    hasVideo?: boolean;
    /**
     * Indicates whether or not VoIP was used for the Webinar.
     */
    hasVoip?: boolean;
    /**
     * User display name.
     */
    host?: string;
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Webinar participant count.
     */
    participants?: number;
    /**
     * Webinar start time.
     */
    startTime?: Date;
    /**
     * Webinar topic.
     */
    topic?: string;
    /**
     * User type.
     */
    userType?: string;
    /**
     * Webinar UUID.
     */
    uuid?: string;
}
export declare class DashboardWebinarDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar details returned.<br>
     * Only available for paid accounts that have enabled the Dashboard feature.
     */
    webinarMetrics?: DashboardWebinarDetailWebinarMetrics;
}
