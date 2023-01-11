import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWorkflowPathParams extends SpeakeasyBase {
    workflowId: string;
}
export declare class DeleteWorkflowHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteWorkflowRequest extends SpeakeasyBase {
    pathParams: DeleteWorkflowPathParams;
    headers: DeleteWorkflowHeaders;
}
export declare class DeleteWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    deleteWorkflowError?: shared.DeleteWorkflowError;
    deleteWorkflowSuccess?: shared.DeleteWorkflowSuccess;
    headers: Record<string, string[]>;
    statusCode: number;
}
