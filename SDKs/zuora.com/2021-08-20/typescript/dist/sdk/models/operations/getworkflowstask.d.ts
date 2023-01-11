import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkflowsTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetWorkflowsTaskHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetWorkflowsTaskRequest extends SpeakeasyBase {
    pathParams: GetWorkflowsTaskPathParams;
    headers: GetWorkflowsTaskHeaders;
}
export declare class GetWorkflowsTaskResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    task?: shared.Task;
}
