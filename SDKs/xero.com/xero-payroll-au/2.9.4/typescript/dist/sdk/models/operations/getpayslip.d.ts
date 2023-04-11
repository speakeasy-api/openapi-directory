import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayslipSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetPayslipRequest extends SpeakeasyBase {
    /**
     * Payslip id for single object
     */
    payslipID: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetPayslipResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    payslipObject?: shared.PayslipObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
