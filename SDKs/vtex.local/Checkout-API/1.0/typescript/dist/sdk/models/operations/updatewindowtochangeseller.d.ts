import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWindowToChangeSellerRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    waitingTime: shared.WaitingTime;
}
export declare class UpdateWindowToChangeSellerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
