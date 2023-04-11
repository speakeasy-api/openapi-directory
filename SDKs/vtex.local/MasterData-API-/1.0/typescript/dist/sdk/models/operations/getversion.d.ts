import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetversionRequest extends SpeakeasyBase {
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
     * Id of the version to get
     */
    versionId: string;
}
export declare class GetversionResponse extends SpeakeasyBase {
    contentType: string;
    getversion?: shared.Getversion;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
