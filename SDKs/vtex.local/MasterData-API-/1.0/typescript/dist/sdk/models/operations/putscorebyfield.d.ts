import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutscorebyfieldRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    putscorebyfieldRequest: shared.PutscorebyfieldRequest;
    /**
     * Two letter word that identifies the data structure
     */
    acronym: string;
    /**
     * Name of the field to score
     */
    fieldName: string;
    /**
     * Id of the document
     */
    id: string;
}
export declare class PutscorebyfieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
