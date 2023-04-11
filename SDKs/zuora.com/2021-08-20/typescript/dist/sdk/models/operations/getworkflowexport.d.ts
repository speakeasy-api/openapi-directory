import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETWorkflowExportRequest extends SpeakeasyBase {
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * The ID of the workflow to export.
     */
    workflowId: number;
}
/**
 * OK
 */
export declare class GETWorkflowExport200ApplicationJSON extends SpeakeasyBase {
    linkages?: shared.Linkage[];
    tasks?: shared.Task[];
    /**
     * A workflow.
     *
     * @remarks
     *
     */
    workflow?: shared.Workflow;
}
export declare class GETWorkflowExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getWorkflowExport200ApplicationJSONObject?: GETWorkflowExport200ApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
