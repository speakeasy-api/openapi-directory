import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetorderFormconfigurationRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
}
export declare class GetorderFormconfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getorderFormconfiguration200ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
