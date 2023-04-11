import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateStatementsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateStatementsRequest extends SpeakeasyBase {
    /**
     * Statements array of objects in the body
     */
    statements?: shared.Statements;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreateStatementsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid application or feed connection
     */
    error?: shared.ErrorT;
    /**
     * Success returns Statements array of objects in response
     */
    statements?: shared.Statements;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
