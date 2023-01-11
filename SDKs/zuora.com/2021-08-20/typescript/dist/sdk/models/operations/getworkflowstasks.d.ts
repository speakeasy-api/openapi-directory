import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkflowsTasksQueryParams extends SpeakeasyBase {
    actionType?: string;
    callType?: string;
    id?: string;
    instance?: boolean;
    name?: string;
    object?: string;
    objectId?: string;
    page?: number;
    pageLength?: number;
    tags?: string;
    workflowId?: string;
}
export declare class GetWorkflowsTasksHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetWorkflowsTasksRequest extends SpeakeasyBase {
    queryParams: GetWorkflowsTasksQueryParams;
    headers: GetWorkflowsTasksHeaders;
}
export declare class GetWorkflowsTasksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    tasksResponse?: shared.TasksResponse;
}
