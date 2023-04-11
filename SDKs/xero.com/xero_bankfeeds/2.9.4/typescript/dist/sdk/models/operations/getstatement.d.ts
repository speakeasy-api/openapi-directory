import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStatementSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetStatementRequest extends SpeakeasyBase {
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
    statementIDPathParameter: string;
    /**
     * statement id for single object
     */
    statementIdQueryParameter: string;
}
export declare class GetStatementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching id for single statement
     */
    statement?: shared.Statement;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
