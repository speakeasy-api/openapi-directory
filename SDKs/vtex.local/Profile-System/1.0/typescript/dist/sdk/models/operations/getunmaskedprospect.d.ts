import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUnmaskedProspectRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.
     */
    prospectId: string;
    /**
     * Reason for requesting unmasked data.
     */
    reason: string;
}
export declare class GetUnmaskedProspectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getUnmaskedProspect200ApplicationJSONAnies?: any[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
