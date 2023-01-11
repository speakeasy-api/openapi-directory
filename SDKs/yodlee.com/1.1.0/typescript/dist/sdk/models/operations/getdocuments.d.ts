import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentsQueryParams extends SpeakeasyBase {
    keyword?: string;
    accountId?: string;
    docType?: string;
    fromDate?: string;
    toDate?: string;
}
export declare class GetDocumentsRequest extends SpeakeasyBase {
    queryParams: GetDocumentsQueryParams;
}
export declare class GetDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    documentResponse?: shared.DocumentResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
