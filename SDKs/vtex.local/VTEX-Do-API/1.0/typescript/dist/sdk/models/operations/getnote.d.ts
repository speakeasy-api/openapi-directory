import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNoteRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Note's ID.
     */
    noteId: string;
    /**
     * This parameter is relevant only for PII-compliant accounts. When sending requests to this endpoint, PII-compliant accounts can use this parameter to declare the reason for requesting unmasked data. Otherwise, this endpoint will return masked PII data.
     */
    reason?: string;
}
export declare class GetNoteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getNote200ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
