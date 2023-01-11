import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutWorkflowsTasksUpdateHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutWorkflowsTasksUpdateRequest extends SpeakeasyBase {
    headers: PutWorkflowsTasksUpdateHeaders;
    request?: shared.PutTasksRequest;
}
export declare class PutWorkflowsTasksUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    tasksResponse?: shared.TasksResponse;
}
