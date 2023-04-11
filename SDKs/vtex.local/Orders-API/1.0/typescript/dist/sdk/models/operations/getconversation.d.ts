import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConversationRequest extends SpeakeasyBase {
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
    /**
     * Reason for requesting unmasked data. Relevant only for PII platform version.
     */
    reason?: string;
}
export declare class GetConversationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getConversations?: shared.GetConversation[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
