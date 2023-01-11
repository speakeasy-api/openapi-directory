import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWorkflowsTaskRerunPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class PostWorkflowsTaskRerunHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostWorkflowsTaskRerunRequest extends SpeakeasyBase {
    pathParams: PostWorkflowsTaskRerunPathParams;
    headers: PostWorkflowsTaskRerunHeaders;
}
export declare class PostWorkflowsTaskRerunResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    task?: shared.Task;
}
