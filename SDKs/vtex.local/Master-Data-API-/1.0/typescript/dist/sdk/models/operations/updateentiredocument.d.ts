import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateentiredocumentRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    requestBody: Record<string, string>;
    /**
     * Name of the schema the document to be created needs to be compliant with.
     */
    schema?: string;
    /**
     * Filter specification.
     */
    where?: string;
    /**
     * Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
     */
    dataEntityName: string;
    /**
     * ID of the Document.
     */
    id: string;
}
export declare class UpdateentiredocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    documentResponse?: shared.DocumentResponse;
}
