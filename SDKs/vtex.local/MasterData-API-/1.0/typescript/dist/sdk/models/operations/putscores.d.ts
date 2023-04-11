import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutscoresRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    requestBody: shared.PutscoresRequest[];
    /**
     * Two letter word that identifies the data structure
     */
    acronym: string;
    /**
     * Id of the document
     */
    id: string;
}
export declare class PutscoresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
