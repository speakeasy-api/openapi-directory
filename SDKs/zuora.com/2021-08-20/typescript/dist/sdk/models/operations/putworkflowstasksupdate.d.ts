import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PUTWorkflowsTasksUpdateRequest extends SpeakeasyBase {
    /**
     * `Bearer {token}` for a valid OAuth token.
     *
     * @remarks
     *
     */
    authorization: string;
    putTasksRequest?: shared.PutTasksRequest;
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
}
export declare class PUTWorkflowsTasksUpdateResponse extends SpeakeasyBase {
    /**
     * Bad Request for one of the following reasons:
     *
     * @remarks
     * * Data is missing
     * * Data is empty or not an array
     * * Data has more than 50 tasks
     *
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tasksResponse?: shared.TasksResponse;
}
