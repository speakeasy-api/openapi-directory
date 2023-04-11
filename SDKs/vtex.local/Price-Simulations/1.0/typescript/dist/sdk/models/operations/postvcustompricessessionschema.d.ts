import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostVCustomPricesSessionSchemaRequestBodyFields extends SpeakeasyBase {
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
export declare class PostVCustomPricesSessionSchemaRequestBody extends SpeakeasyBase {
    /**
     * Order Configuration criteria
     */
    fields: PostVCustomPricesSessionSchemaRequestBodyFields[];
    /**
     * If the custom price should use the user's e-mail to validate it
     */
    useEmail?: boolean;
}
export declare class PostVCustomPricesSessionSchemaRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Describes the type of the content being sent
     */
    contentType: string;
    requestBody?: PostVCustomPricesSessionSchemaRequestBody;
}
export declare class PostVCustomPricesSessionSchemaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    requestBody?: PostVCustomPricesSessionSchemaRequestBody;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
