import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NewTaskRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    newTaskRequest: shared.NewTaskRequest;
}
export declare class NewTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    newTask200ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
