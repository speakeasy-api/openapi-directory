import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ThreeSendAdditionalDataRequest extends SpeakeasyBase {
    /**
     * Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json
     */
    accept: string;
    /**
     * The Media type of the body of the request.  Default value for payment provider protocol is application/json
     */
    contentType: string;
    requestBody: any[][];
    /**
     * The AppKey configured by the merchant (optional configuration)
     */
    xPROVIDERAPIAppKey: string;
    /**
     * The AppToken configured by the merchant (optional configuration)
     */
    xPROVIDERAPIAppToken: string;
    /**
     * Transaction identification.
     */
    transactionId: string;
}
export declare class ThreeSendAdditionalDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
