import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    pickupPointId: string;
}
export declare class DeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
