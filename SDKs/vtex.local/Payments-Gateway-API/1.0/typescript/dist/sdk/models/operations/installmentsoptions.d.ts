import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InstallmentsoptionsRequest extends SpeakeasyBase {
    /**
     * Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json
     */
    accept: string;
    /**
     * The Media type of the body of the request.  Default value for payment provider protocol is application/json
     */
    contentType: string;
    /**
     * The AppKey configured by the merchant (optional configuration)
     */
    xPROVIDERAPIAppKey: string;
    /**
     * The AppToken configured by the merchant (optional configuration)
     */
    xPROVIDERAPIAppToken: string;
    requestPaymentDetails0Bin?: number;
    requestPaymentDetails0Id?: number;
    requestPaymentDetails0Value?: number;
    requestSalesChannel?: number;
    requestValue: number;
}
export declare class InstallmentsoptionsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Bad Request
     */
    invalidRequestValue?: shared.InvalidRequestValue;
    statusCode: number;
    rawResponse?: AxiosResponse;
    validRequest?: shared.ValidRequest;
}
