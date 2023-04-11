import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionCancellationsRequest extends SpeakeasyBase {
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
export declare class GetTransactionCancellationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    response7s?: shared.Response7[];
}
