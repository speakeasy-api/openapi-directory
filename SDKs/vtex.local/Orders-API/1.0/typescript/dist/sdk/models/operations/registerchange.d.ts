import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegisterChangeRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    registerChangeRequest: shared.RegisterChangeRequest;
    /**
     * ID that identifies the order in the seller.
     */
    orderId: string;
}
export declare class RegisterChangeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    registerChange?: shared.RegisterChange;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
