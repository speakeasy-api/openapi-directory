import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * <!-- <div class="warning" style='padding:0.1em; background-color:#FEEFB3; color:#9F6000;'>
 *
 * @remarks
 *     <span>
 *         <p style='margin-top:0.9em;margin-bottom:0.9em;margin-left:1em; text-align:left'>
 *             <b>ⓘ</b> This feature is currently in BETA mode
 *         </p>
 *     </span>
 * </div>
 *
 * The Fees endpoints allow a wealth manager to manage fees in terms of creating and charging an external fee or retrieving information on fee configurations setup in the system for recurring fee computations. -->
 *
 * The Fees endpoint allows a wealth manager to charge an externally calculated or derived fee from an investor's pot.
 */
export declare class Fees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Fee
     *
     * @remarks
     * This endpoint supports the creation of a single fee deduction from an investor's pot. A sucessful fee creation will result in the creation of a fee transaction and updates to holdings. The system will return the `transaction_id` of the fee transaction.
     */
    createFee(req: operations.CreateFeeRequest, security: operations.CreateFeeSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFeeResponse>;
}
