import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatenewdocumentRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    requestBody: Record<string, any>;
    /**
     * Identifies the kind of data
     */
    acronym: string;
}
export declare class CreatenewdocumentResponse extends SpeakeasyBase {
    contentType: string;
    createnewdocument?: shared.Createnewdocument;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
