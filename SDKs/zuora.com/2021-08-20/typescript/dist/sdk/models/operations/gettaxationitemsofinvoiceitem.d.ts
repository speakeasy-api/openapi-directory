import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaxationItemsOfInvoiceItemPathParams extends SpeakeasyBase {
    invoiceId: string;
    itemId: string;
}
export declare class GetTaxationItemsOfInvoiceItemQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetTaxationItemsOfInvoiceItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetTaxationItemsOfInvoiceItemRequest extends SpeakeasyBase {
    pathParams: GetTaxationItemsOfInvoiceItemPathParams;
    queryParams: GetTaxationItemsOfInvoiceItemQueryParams;
    headers: GetTaxationItemsOfInvoiceItemHeaders;
}
export declare class GetTaxationItemsOfInvoiceItemResponse extends SpeakeasyBase {
    contentType: string;
    getInvoiceTaxationItemsResponse?: shared.GetInvoiceTaxationItemsResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
