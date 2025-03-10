import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionSettlementsRequest extends SpeakeasyBase {
    /**
     * Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json
     */
    accept: string;
    /**
     * The Media type of the body of the request. Default value for payment provider protocol is application/json
     */
    contentType: string;
    giftCardID: string;
    transactionID: string;
}
export declare class GetTransactionSettlementsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    response6s?: shared.Response6[];
}
