import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchdocumentsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * Range of documents to show
     */
    restRange: string;
    /**
     * Fields that will be returned by document
     */
    fields?: string;
    /**
     * String to search
     */
    keyword?: string;
    /**
     * Enter with the name of the schema to filter documents by compatibility of the schema.
     */
    schema?: string;
    /**
     * Use ASC value to sort ascending or DESC value to sort descending.
     */
    sort?: string;
    /**
     * Specification of filters. As seen below
     */
    where?: string;
    /**
     * Identifies the kind of data
     */
    acronym: string;
}
export declare class SearchdocumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Service Unavailable
     */
    searchdocuments503ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
