import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchUpdateWorkflowPathParams extends SpeakeasyBase {
    workflowId: string;
}
export declare class PatchUpdateWorkflowHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
}
export declare class PatchUpdateWorkflowRequestBody extends SpeakeasyBase {
    calloutTrigger?: boolean;
    description?: string;
    interval?: string;
    name?: string;
    ondemandTrigger?: boolean;
    priority?: string;
    scheduledTrigger?: boolean;
    status?: string;
    timezone?: string;
}
export declare class PatchUpdateWorkflowRequest extends SpeakeasyBase {
    pathParams: PatchUpdateWorkflowPathParams;
    headers: PatchUpdateWorkflowHeaders;
    request?: PatchUpdateWorkflowRequestBody;
}
export declare class PatchUpdateWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    deleteWorkflowError?: shared.DeleteWorkflowError;
    getWorkflowSetupResponse?: shared.GetWorkflowSetupResponse;
    headers: Record<string, string[]>;
    statusCode: number;
    validationErrors?: shared.ValidationErrors;
}
