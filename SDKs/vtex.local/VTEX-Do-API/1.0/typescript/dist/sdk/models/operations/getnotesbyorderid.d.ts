import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNotesbyorderIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Number of the page to be retrieved.
     */
    page?: number;
    /**
     * Number of notes per page. Maximum: 30.
     */
    perPage?: number;
    /**
     * This parameter is relevant only for PII-compliant accounts. When sending requests to this endpoint, PII-compliant accounts can use this parameter to declare the reason for requesting unmasked data. Otherwise, this endpoint will return masked PII data.
     */
    reason?: string;
    /**
     * ID of the order.
     */
    targetId: string;
}
export declare class GetNotesbyorderIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getNotesbyorderId200ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
