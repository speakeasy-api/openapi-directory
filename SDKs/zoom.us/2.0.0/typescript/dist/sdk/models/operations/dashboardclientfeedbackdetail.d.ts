import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardClientFeedbackDetailSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DashboardClientFeedbackDetailRequest extends SpeakeasyBase {
    /**
     * Feedback Detail Id
     */
    feedbackId: string;
    from?: Date;
    nextPageToken?: string;
    pageSize?: number;
    to?: Date;
}
export declare class DashboardClientFeedbackDetail200ApplicationXMLClientFeedbackDetails extends SpeakeasyBase {
    /**
     * Email address of the participant.
     */
    email?: string;
    /**
     * Meeting ID
     */
    meetingId?: string;
    /**
     * Participant Name
     */
    participantName?: string;
    /**
     * Time at which the feedback was submitted by the participant.
     */
    time?: Date;
}
/**
 * Pagination object.
 */
export declare class DashboardClientFeedbackDetail200ApplicationXML extends SpeakeasyBase {
    clientFeedbackDetails?: DashboardClientFeedbackDetail200ApplicationXMLClientFeedbackDetails[];
    /**
     * Start date for this report
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The amount of records returns within a single API call.
     */
    pageSize?: number;
    /**
     * End date for this report
     */
    to?: Date;
}
export declare class DashboardClientFeedbackDetail200ApplicationJSONClientFeedbackDetails extends SpeakeasyBase {
    /**
     * Email address of the participant.
     */
    email?: string;
    /**
     * Meeting ID
     */
    meetingId?: string;
    /**
     * Participant Name
     */
    participantName?: string;
    /**
     * Time at which the feedback was submitted by the participant.
     */
    time?: Date;
}
/**
 * Pagination object.
 */
export declare class DashboardClientFeedbackDetail200ApplicationJSON extends SpeakeasyBase {
    clientFeedbackDetails?: DashboardClientFeedbackDetail200ApplicationJSONClientFeedbackDetails[];
    /**
     * Start date for this report
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The amount of records returns within a single API call.
     */
    pageSize?: number;
    /**
     * End date for this report
     */
    to?: Date;
}
export declare class DashboardClientFeedbackDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Client Feedback details returned
     */
    dashboardClientFeedbackDetail200ApplicationJSONObject?: DashboardClientFeedbackDetail200ApplicationJSON;
}
