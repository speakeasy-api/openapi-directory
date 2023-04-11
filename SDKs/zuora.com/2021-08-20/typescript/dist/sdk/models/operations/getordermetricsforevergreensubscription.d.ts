import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETOrderMetricsforEvergreenSubscriptionRequest extends SpeakeasyBase {
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * The end date of the date range for which you want to get the metrics. The date must be in yyyy-mm-dd format. For example, 2017-12-03.
     *
     * @remarks
     *
     */
    endDate: Date;
    /**
     * The order number.
     *
     * @remarks
     *
     */
    orderNumber: string;
    /**
     * The start date of the date range for which you want to get the metrics. The date must be in yyyy-mm-dd format. For example, 2017-12-03.
     *
     * @remarks
     *
     */
    startDate: Date;
    /**
     * The subscription number you want to get the metrics for.
     *
     * @remarks
     *
     */
    subscriptionNumber: string;
}
export declare class GETOrderMetricsforEvergreenSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    getOrderResponseForEvergreen?: shared.GetOrderResponseForEvergreen;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
