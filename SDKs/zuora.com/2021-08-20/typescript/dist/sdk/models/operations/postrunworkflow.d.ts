import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRunWorkflowPathParams extends SpeakeasyBase {
    workflowId: number;
}
export declare class PostRunWorkflowHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRunWorkflow400ApplicationJson extends SpeakeasyBase {
    errors?: shared.WorkflowError[];
}
export declare class PostRunWorkflow406ApplicationJson extends SpeakeasyBase {
    errors?: shared.WorkflowError[];
    parameters?: any;
}
export declare class PostRunWorkflow409ApplicationJson extends SpeakeasyBase {
    errors?: shared.WorkflowError[];
}
export declare class PostRunWorkflowRequest extends SpeakeasyBase {
    pathParams: PostRunWorkflowPathParams;
    headers: PostRunWorkflowHeaders;
    request?: Record<string, any>;
}
export declare class PostRunWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRunWorkflow400ApplicationJSONObject?: PostRunWorkflow400ApplicationJson;
    postRunWorkflow406ApplicationJSONObject?: PostRunWorkflow406ApplicationJson;
    postRunWorkflow409ApplicationJSONObject?: PostRunWorkflow409ApplicationJson;
    statusCode: number;
    workflowInstance?: shared.WorkflowInstance;
}
