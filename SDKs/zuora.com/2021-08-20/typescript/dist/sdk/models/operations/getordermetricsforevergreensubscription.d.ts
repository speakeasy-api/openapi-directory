import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderMetricsforEvergreenSubscriptionPathParams extends SpeakeasyBase {
    orderNumber: string;
    subscriptionNumber: string;
}
export declare class GetOrderMetricsforEvergreenSubscriptionQueryParams extends SpeakeasyBase {
    endDate: Date;
    startDate: Date;
}
export declare class GetOrderMetricsforEvergreenSubscriptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetOrderMetricsforEvergreenSubscriptionRequest extends SpeakeasyBase {
    pathParams: GetOrderMetricsforEvergreenSubscriptionPathParams;
    queryParams: GetOrderMetricsforEvergreenSubscriptionQueryParams;
    headers: GetOrderMetricsforEvergreenSubscriptionHeaders;
}
export declare class GetOrderMetricsforEvergreenSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    getOrderResponseForEvergreen?: shared.GetOrderResponseForEvergreen;
    headers: Record<string, string[]>;
    statusCode: number;
}
