import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionInvoicePathParams extends SpeakeasyBase {
    accountKey: string;
}
export declare class GetTransactionInvoiceQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetTransactionInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetTransactionInvoiceRequest extends SpeakeasyBase {
    pathParams: GetTransactionInvoicePathParams;
    queryParams: GetTransactionInvoiceQueryParams;
    headers: GetTransactionInvoiceHeaders;
}
export declare class GetTransactionInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    getInvoiceFileWrapper?: shared.GetInvoiceFileWrapper;
    headers: Record<string, string[]>;
    statusCode: number;
}
