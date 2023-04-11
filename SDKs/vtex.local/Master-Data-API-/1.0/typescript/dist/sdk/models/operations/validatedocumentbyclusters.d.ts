import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ValidatedocumentbyclustersRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Request body for validating a document by clusters
     */
    requestBody: string;
    /**
     * Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
     */
    dataEntityName: string;
    /**
     * ID of the Document.
     */
    id: string;
}
export declare class ValidatedocumentbyclustersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
