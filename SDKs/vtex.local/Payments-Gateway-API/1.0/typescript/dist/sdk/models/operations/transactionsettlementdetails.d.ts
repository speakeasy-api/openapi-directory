import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TransactionSettlementDetailsRequest extends SpeakeasyBase {
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
    transactionId: string;
}
export declare class TransactionSettlementDetailsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    transactionSettlementDetails?: shared.TransactionSettlementDetails;
}
