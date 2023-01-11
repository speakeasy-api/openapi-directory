import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrdersBySubscriptionOwnerPathParams extends SpeakeasyBase {
    accountNumber: string;
}
export declare class GetOrdersBySubscriptionOwnerQueryParams extends SpeakeasyBase {
    dateFilterOption?: string;
    endDate?: Date;
    page?: number;
    pageSize?: number;
    startDate?: Date;
}
export declare class GetOrdersBySubscriptionOwnerHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetOrdersBySubscriptionOwnerRequest extends SpeakeasyBase {
    pathParams: GetOrdersBySubscriptionOwnerPathParams;
    queryParams: GetOrdersBySubscriptionOwnerQueryParams;
    headers: GetOrdersBySubscriptionOwnerHeaders;
}
export declare class GetOrdersBySubscriptionOwnerResponse extends SpeakeasyBase {
    contentType: string;
    getOrdersResponse?: shared.GetOrdersResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
