import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkflowsQueryParams extends SpeakeasyBase {
    calloutTrigger?: boolean;
    interval?: string;
    name?: string;
    ondemandTrigger?: boolean;
    page?: number;
    pageLength?: number;
    scheduledTrigger?: boolean;
}
export declare class GetWorkflowsHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetWorkflowsRequest extends SpeakeasyBase {
    queryParams: GetWorkflowsQueryParams;
    headers: GetWorkflowsHeaders;
}
export declare class GetWorkflowsResponse extends SpeakeasyBase {
    contentType: string;
    getWorkflowsResponse?: shared.GetWorkflowsResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
