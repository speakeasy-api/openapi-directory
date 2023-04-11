import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateEmployeeSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateEmployeeRequest extends SpeakeasyBase {
    requestBody: shared.EmployeeInput[];
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreateEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request
     */
    employees?: shared.Employees;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
