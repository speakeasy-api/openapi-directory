import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoiceItemsPathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class GetInvoiceItemsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetInvoiceItemsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetInvoiceItemsRequest extends SpeakeasyBase {
    pathParams: GetInvoiceItemsPathParams;
    queryParams: GetInvoiceItemsQueryParams;
    headers: GetInvoiceItemsHeaders;
}
export declare class GetInvoiceItemsResponse extends SpeakeasyBase {
    contentType: string;
    getInvoiceItemsResponse?: shared.GetInvoiceItemsResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
