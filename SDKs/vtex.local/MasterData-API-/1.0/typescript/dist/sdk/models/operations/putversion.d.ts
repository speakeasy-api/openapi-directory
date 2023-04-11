import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutversionRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * Two letter word that identifies the data structure
     */
    acronym: string;
    /**
     * Id of the document
     */
    id: string;
    /**
     * Id of the version to update
     */
    versionId: string;
}
export declare class PutversionResponse extends SpeakeasyBase {
    contentType: string;
    putversion?: shared.Putversion;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
