import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListtasksbyassigneeRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * If you wish to list tasks by assignee, insert the desired assignee's email and status.
     */
    assigneeEmail?: string;
    /**
     * If you wish to list tasks by context, insert the desired context, `page`, `perPage` and `status`.
     */
    context?: string;
    /**
     * If you wish to list tasks by context, also insert the desired `page`.
     */
    page?: string;
    /**
     * If you wish to list tasks by context, also insert the desired `perPage` value.
     */
    perPage?: string;
    /**
     * If you wish to list tasks by context, also insert the desired `status`.
     */
    status?: string;
    /**
     * If you wish to list tasks by target, insert the desired `targetId` and `status`.
     */
    targetId?: string;
}
export declare class ListtasksbyassigneeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listtasksbyassignee200ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
