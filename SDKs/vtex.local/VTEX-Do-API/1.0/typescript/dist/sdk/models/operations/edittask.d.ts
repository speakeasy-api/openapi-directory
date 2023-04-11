import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditTaskRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    editTaskRequest: shared.EditTaskRequest;
    /**
     * Task ID.
     */
    taskId: string;
}
export declare class EditTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editTask200ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
