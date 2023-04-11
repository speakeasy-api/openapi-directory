import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTaskRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Task ID.
     */
    taskId: string;
}
export declare class GetTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getTask200ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
