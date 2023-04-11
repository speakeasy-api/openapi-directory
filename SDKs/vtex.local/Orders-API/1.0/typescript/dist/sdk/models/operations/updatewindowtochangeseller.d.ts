import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateWindowToChangeSellerRequestBody extends SpeakeasyBase {
    /**
     * Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order.
     */
    waitingTime: number;
}
export declare class UpdateWindowToChangeSellerRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: UpdateWindowToChangeSellerRequestBody;
}
export declare class UpdateWindowToChangeSellerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
