import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddCommentRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    addCommentRequest: shared.AddCommentRequest;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Task ID.
     */
    taskId: string;
}
export declare class AddCommentResponse extends SpeakeasyBase {
    /**
     * OK
     */
    addComment200ApplicationJSONAny?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
