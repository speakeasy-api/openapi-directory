import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetProspectRequest extends SpeakeasyBase {
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
}
export declare class GetProspectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getProspect200ApplicationJSONAnies?: any[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
