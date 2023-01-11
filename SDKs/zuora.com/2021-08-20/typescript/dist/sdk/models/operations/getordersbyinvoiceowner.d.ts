import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrdersByInvoiceOwnerPathParams extends SpeakeasyBase {
    accountNumber: string;
}
export declare class GetOrdersByInvoiceOwnerQueryParams extends SpeakeasyBase {
    dateFilterOption?: string;
    endDate?: Date;
    page?: number;
    pageSize?: number;
    startDate?: Date;
}
export declare class GetOrdersByInvoiceOwnerHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetOrdersByInvoiceOwnerRequest extends SpeakeasyBase {
    pathParams: GetOrdersByInvoiceOwnerPathParams;
    queryParams: GetOrdersByInvoiceOwnerQueryParams;
    headers: GetOrdersByInvoiceOwnerHeaders;
}
export declare class GetOrdersByInvoiceOwnerResponse extends SpeakeasyBase {
    contentType: string;
    getOrdersResponse?: shared.GetOrdersResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
