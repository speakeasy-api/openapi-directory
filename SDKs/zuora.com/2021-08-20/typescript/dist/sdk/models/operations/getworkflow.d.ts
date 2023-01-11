import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkflowPathParams extends SpeakeasyBase {
    workflowId: string;
}
export declare class GetWorkflowHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetWorkflowRequest extends SpeakeasyBase {
    pathParams: GetWorkflowPathParams;
    headers: GetWorkflowHeaders;
}
export declare class GetWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    getWorkflowResponse?: shared.GetWorkflowResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
