import { AxiosInstance } from "axios";
import { PayrollAu } from "./payrollau";
export declare const ServerList: readonly ["https://api.xero.com/payroll.xro/1.0"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    payrollAu: PayrollAu;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
