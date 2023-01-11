import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkflowExportPathParams extends SpeakeasyBase {
    workflowId: number;
}
export declare class GetWorkflowExportHeaders extends SpeakeasyBase {
    zuoraTrackId?: string;
}
export declare class GetWorkflowExport200ApplicationJson extends SpeakeasyBase {
    linkages?: shared.Linkage[];
    tasks?: shared.Task[];
    workflow?: shared.Workflow;
}
export declare class GetWorkflowExportRequest extends SpeakeasyBase {
    pathParams: GetWorkflowExportPathParams;
    headers: GetWorkflowExportHeaders;
}
export declare class GetWorkflowExportResponse extends SpeakeasyBase {
    contentType: string;
    getWorkflowExport200ApplicationJSONObject?: GetWorkflowExport200ApplicationJson;
    headers: Record<string, string[]>;
    statusCode: number;
}
