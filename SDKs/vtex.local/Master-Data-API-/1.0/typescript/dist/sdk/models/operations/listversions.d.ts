import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListversionsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
     */
    dataEntityName: string;
    /**
     * If `load` is true, the response will return only these specific fields
     */
    fields?: string;
    /**
     * ID of the Document.
     */
    id: string;
    /**
     * If true, return all the fields in each version of the document
     */
    load?: boolean;
}
export declare class ListversionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listversions?: shared.Listversion[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
