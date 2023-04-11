import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ScrolldocumentsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Defines the collection of documents to be returned. A range within the collection limited by 100 documents per query.
     */
    restRange: string;
    /**
     * Fields that should be returned by document. Separate fields' names with commas. For example `_fields=email,firstName,document`. You can also use `_all` to fetch all fields.
     */
    fields?: string;
    /**
     * String to search. Use quotes for a partial query. For example, `_keyword=Maria` or `_keyword="Maria"`.
     */
    keyword?: string;
    /**
     * Name of the schema the document to be created needs to be compliant with.
     */
    schema?: string;
    /**
     * Sets sorting mode in two parts. The first part is the name of the field you want to sort by. In the second part, use `ASC` for ascending or `DESC` for descending.
     */
    sort?: string;
    /**
     * Value of the header `X-VTEX-MD-TOKEN` returned in your first request. Send its value in this query string in the subsequent requests. The token has a timeout of 10 minutes, which refreshes after each new request.
     */
    token?: string;
    /**
     * Filter specification.
     */
    where?: string;
    /**
     * Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
     */
    dataEntityName: string;
}
export declare class ScrolldocumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Too Many Requests
     */
    scrolldocuments429ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
