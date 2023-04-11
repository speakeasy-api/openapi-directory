import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PhoneReports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get operation logs report
     *
     * @remarks
     * The **Phone System operation logs report** allows account owners and admins to view monthly Zoom phone related admin operation details.
     *
     * Use this API to retrieve the **Phone System Operation Logs Report**. Account owners and admins can also access this information by logging into their Zoom accounts and navigating to [Phone System Operation Logs](https://zoom.us/pbx/page/report/operations#/report/operation-logs).<br><br> **Scopes:** `phone:read:admin`, `phone:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * <br> **Prerequisites:** <br>
     * * Account must be enrollled in Pro or a higher plan
     * * Account must be enrolled in a [Zoom Phone](https://zoom.us/pricing/zoom-phone) plan
     *
     *
     */
    getPSOperationLogs(req: operations.GetPSOperationLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetPSOperationLogsResponse>;
}
