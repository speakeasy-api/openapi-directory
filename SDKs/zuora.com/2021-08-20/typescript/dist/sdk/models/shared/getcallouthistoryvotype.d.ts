import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETCalloutHistoryVOType extends SpeakeasyBase {
    /**
     * The number of times the callout was retried.
     *
     * @remarks
     *
     */
    attemptedNum?: string;
    /**
     * The time that the calloutHistory record was made.
     *
     * @remarks
     *
     */
    createTime?: string;
    /**
     * The event category for the callout.
     *
     * @remarks
     *
     */
    eventCategory?: string;
    /**
     * The context of the callout event.
     *
     * @remarks
     *
     */
    eventContext?: string;
    /**
     * The name of the notification.
     *
     * @remarks
     *
     */
    notification?: string;
    /**
     * The request method set in notifications settings.
     *
     * @remarks
     *
     */
    requestMethod?: string;
    /**
     * The base url set in notifications settings.
     *
     * @remarks
     *
     */
    requestUrl?: string;
    /**
     * The responseCode of the request.
     *
     * @remarks
     *
     */
    responseCode?: string;
    responseContent?: string;
}
