import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Target.
 */
export declare class NewNoteRequestBodyTarget extends SpeakeasyBase {
    /**
     * Target ID.
     */
    id?: string;
    /**
     * Target type.
     */
    type?: string;
    /**
     * Target URL.
     */
    url?: string;
}
export declare class NewNoteRequestBody extends SpeakeasyBase {
    /**
     * Note description. Maximum number of characters: 2000.
     */
    description: string;
    /**
     * Note domain.
     */
    domain: string;
    /**
     * Target.
     */
    target: NewNoteRequestBodyTarget;
}
export declare class NewNoteRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: NewNoteRequestBody;
}
export declare class NewNoteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    newNote200ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
