import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Switch Instruction endpoints allow you to switch existing holdings (cash and investment products) to a new set of investment products via a single instruction. You can specify the holdings you want to sell along with a `mode` and `value` (e.g. number of units to be sold, total value of holding to be sold or % of holding to be sold) and the investment products you want to buy (using the proceeds of the sales and and/or free cash available in the pot). The buy instructions can also be specified with a `mode` and `value` (e.g. number of units to buy, total value of holding to be bought or % of proceeds to be used to buy specific investment product).
 *
 * @remarks
 *
 * You can view the status of your switch instruction at any point through the API (both the overall 'parent' switch instruction as well as the individual 'child' buy/sell transactions).
 */
export declare class SwitchInstruction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Execute Switch Instruction
     *
     * @remarks
     * Send a switch instruction with details of the investment products to be sold, free cash to be used (if any) and investment products to be bought.
     */
    executeSwitchTrasaction(req: operations.ExecuteSwitchTrasactionRequest, security: operations.ExecuteSwitchTrasactionSecurity, config?: AxiosRequestConfig): Promise<operations.ExecuteSwitchTrasactionResponse>;
    /**
     * Retrieve Switch instruction from Switch ID
     *
     * @remarks
     * Retrieve the status of an existing switch instruction from the `switch_transaction_id`. If the status of the individual buy/sell transactions are required, you must send the request with include_details = `true`.
     */
    getSwitch(req: operations.GetSwitchRequest, security: operations.GetSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.GetSwitchResponse>;
}
