import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStatementsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetStatementsRequest extends SpeakeasyBase {
    xeroApplicationId?: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
    xeroUserId?: string;
    /**
     * unique id for single object
     */
    page?: number;
    /**
     * Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100.
     */
    pageSize?: number;
}
export declare class GetStatementsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success returns Statements array of objects response
     */
    statements?: shared.Statements;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
