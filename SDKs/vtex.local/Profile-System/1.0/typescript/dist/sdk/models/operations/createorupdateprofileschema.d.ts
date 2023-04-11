import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateOrUpdateProfileSchemaRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    schema?: shared.Schema;
}
export declare class CreateOrUpdateProfileSchemaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    createOrUpdateProfileSchema201ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
