import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateProspectRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: any;
    /**
     * ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.
     */
    prospectId: string;
}
export declare class UpdateProspectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updateProspect200ApplicationJSONObject?: Record<string, any>;
}
