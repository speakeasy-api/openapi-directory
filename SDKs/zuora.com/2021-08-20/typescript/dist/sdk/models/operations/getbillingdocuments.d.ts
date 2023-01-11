import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBillingDocumentsQueryParams extends SpeakeasyBase {
    accountId: string;
    documentDate?: Date;
    pageSize?: number;
    sort?: string;
    status?: shared.GlobalRequestPageSizeEnum1;
}
export declare class GetBillingDocumentsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetBillingDocumentsRequest extends SpeakeasyBase {
    queryParams: GetBillingDocumentsQueryParams;
    headers: GetBillingDocumentsHeaders;
}
export declare class GetBillingDocumentsResponse extends SpeakeasyBase {
    billingDocumentQueryResponseElementType?: shared.BillingDocumentQueryResponseElementType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
