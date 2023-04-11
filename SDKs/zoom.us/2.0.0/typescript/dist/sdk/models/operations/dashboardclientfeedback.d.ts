import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardClientFeedbackSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DashboardClientFeedbackRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * End date.
     */
    to: Date;
}
export declare class DashboardClientFeedback200ApplicationXMLClientFeedbacks extends SpeakeasyBase {
    /**
     * Feedback Id
     */
    feedbackId?: string;
    /**
     * Feedback Name
     */
    feedbackName?: string;
    /**
     * The number of participants that upvoted the feedback.
     */
    participantsCount?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Client Feedback details returned.
 */
export declare class DashboardClientFeedback200ApplicationXML extends SpeakeasyBase {
    clientFeedbacks?: DashboardClientFeedback200ApplicationXMLClientFeedbacks[];
    /**
     * Start date for this report
     */
    from?: Date;
    /**
     * End date for this report
     */
    to?: Date;
    /**
     * The number of all records available across pages
     */
    totalRecords?: number;
}
export declare class DashboardClientFeedback200ApplicationJSONClientFeedbacks extends SpeakeasyBase {
    /**
     * Feedback Id
     */
    feedbackId?: string;
    /**
     * Feedback Name
     */
    feedbackName?: string;
    /**
     * The number of participants that upvoted the feedback.
     */
    participantsCount?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Client Feedback details returned.
 */
export declare class DashboardClientFeedback200ApplicationJSON extends SpeakeasyBase {
    clientFeedbacks?: DashboardClientFeedback200ApplicationJSONClientFeedbacks[];
    /**
     * Start date for this report
     */
    from?: Date;
    /**
     * End date for this report
     */
    to?: Date;
    /**
     * The number of all records available across pages
     */
    totalRecords?: number;
}
export declare class DashboardClientFeedbackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Client Feedback details returned.
     */
    dashboardClientFeedback200ApplicationJSONObject?: DashboardClientFeedback200ApplicationJSON;
}
