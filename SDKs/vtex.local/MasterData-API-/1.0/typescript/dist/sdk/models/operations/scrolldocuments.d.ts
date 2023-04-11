import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ScrolldocumentsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * Identifies the kind of data
     */
    acronym: string;
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
