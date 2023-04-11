import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymenttransactionRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Order ID is a unique code that identifies an order.
     */
    orderId: string;
}
export declare class GetPaymenttransactionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getPaymenttransaction?: shared.GetPaymenttransaction;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
