import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatementsQueryParams extends SpeakeasyBase {
    accountId?: string;
    container?: string;
    fromDate?: string;
    isLatest?: string;
    status?: string;
}
export declare class GetStatementsRequest extends SpeakeasyBase {
    queryParams: GetStatementsQueryParams;
}
export declare class GetStatementsResponse extends SpeakeasyBase {
    contentType: string;
    statementResponse?: shared.StatementResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
