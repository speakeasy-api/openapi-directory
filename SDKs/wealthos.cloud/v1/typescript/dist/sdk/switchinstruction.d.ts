import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SwitchInstruction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * executeSwitchTrasaction - Execute Switch Instruction
     *
     * Send a switch instruction with details of the investment products to be sold, free cash to be used (if any) and investment products to be bought.
    **/
    executeSwitchTrasaction(req: operations.ExecuteSwitchTrasactionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteSwitchTrasactionResponse>;
    /**
     * getSwitch - Retrieve Switch instruction from Switch ID
     *
     * Retrieve the status of an existing switch instruction from the `switch_transaction_id`. If the status of the individual buy/sell transactions are required, you must send the request with include_details = `true`.
    **/
    getSwitch(req: operations.GetSwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetSwitchResponse>;
}
