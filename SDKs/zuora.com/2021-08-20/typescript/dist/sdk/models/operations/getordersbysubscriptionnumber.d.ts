import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrdersBySubscriptionNumberPathParams extends SpeakeasyBase {
    subscriptionNumber: string;
}
export declare class GetOrdersBySubscriptionNumberQueryParams extends SpeakeasyBase {
    dateFilterOption?: string;
    endDate?: Date;
    page?: number;
    pageSize?: number;
    startDate?: Date;
}
export declare class GetOrdersBySubscriptionNumberHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetOrdersBySubscriptionNumberRequest extends SpeakeasyBase {
    pathParams: GetOrdersBySubscriptionNumberPathParams;
    queryParams: GetOrdersBySubscriptionNumberQueryParams;
    headers: GetOrdersBySubscriptionNumberHeaders;
}
export declare class GetOrdersBySubscriptionNumberResponse extends SpeakeasyBase {
    contentType: string;
    getOrdersResponse?: shared.GetOrdersResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
