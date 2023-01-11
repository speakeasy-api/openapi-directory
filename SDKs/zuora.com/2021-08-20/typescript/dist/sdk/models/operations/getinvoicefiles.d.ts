import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoiceFilesPathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class GetInvoiceFilesQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetInvoiceFilesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetInvoiceFilesRequest extends SpeakeasyBase {
    pathParams: GetInvoiceFilesPathParams;
    queryParams: GetInvoiceFilesQueryParams;
    headers: GetInvoiceFilesHeaders;
}
export declare class GetInvoiceFilesResponse extends SpeakeasyBase {
    contentType: string;
    getInvoiceFilesResponse?: shared.GetInvoiceFilesResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
