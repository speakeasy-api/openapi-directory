import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateentiredocumentRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    requestBody: Record<string, any>;
    /**
     * Two letter word that identifies the data structure
     */
    acronym: string;
    /**
     * Id of the document
     */
    id: string;
}
export declare class UpdateentiredocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
