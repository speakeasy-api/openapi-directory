import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWorkflowImportHeaders extends SpeakeasyBase {
    zuoraTrackId?: string;
}
export declare class PostWorkflowImportRequestBody extends SpeakeasyBase {
    linkages?: shared.Linkage[];
    tasks?: shared.Task[];
    workflow?: shared.Workflow;
}
export declare class PostWorkflowImportRequest extends SpeakeasyBase {
    headers: PostWorkflowImportHeaders;
    request?: PostWorkflowImportRequestBody;
}
export declare class PostWorkflowImportResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    workflow?: shared.Workflow;
}
