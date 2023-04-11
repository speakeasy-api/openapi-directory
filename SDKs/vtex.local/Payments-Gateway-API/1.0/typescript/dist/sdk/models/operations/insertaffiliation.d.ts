import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InsertAffiliationRequest extends SpeakeasyBase {
    /**
     * Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json
     */
    accept: string;
    /**
     * The Media type of the body of the request.  Default value for payment provider protocol is application/json
     */
    contentType: string;
    insertAffiliationRequest: shared.InsertAffiliationRequest;
    /**
     * The AppKey configured by the merchant (optional configuration)
     */
    xPROVIDERAPIAppKey: string;
    /**
     * The AppToken configured by the merchant (optional configuration)
     */
    xPROVIDERAPIAppToken: string;
}
export declare class InsertAffiliationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
