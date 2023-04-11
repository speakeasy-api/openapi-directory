import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVCustomPricesSessionSchemaRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Describes the type of the content being sent
     */
    contentType: string;
}
export declare class GetVCustomPricesSessionSchemaRequestBodyFields extends SpeakeasyBase {
    /**
     * Criteria name
     */
    name: string;
    /**
     * Criteria type
     */
    type: string;
}
/**
 * OK
 */
export declare class GetVCustomPricesSessionSchemaRequestBody extends SpeakeasyBase {
    /**
     * Order Configuration criteria
     */
    fields: GetVCustomPricesSessionSchemaRequestBodyFields[];
    /**
     * If the custom price should use the user's e-mail to validate it
     */
    useEmail?: boolean;
}
export declare class GetVCustomPricesSessionSchemaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    requestBody?: GetVCustomPricesSessionSchemaRequestBody;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
