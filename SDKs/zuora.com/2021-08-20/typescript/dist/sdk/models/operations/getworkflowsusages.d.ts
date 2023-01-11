import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkflowsUsagesQueryParams extends SpeakeasyBase {
    endDate: Date;
    metrics: string;
    startDate: Date;
}
export declare class GetWorkflowsUsagesHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetWorkflowsUsagesRequest extends SpeakeasyBase {
    queryParams: GetWorkflowsUsagesQueryParams;
    headers: GetWorkflowsUsagesHeaders;
}
export declare class GetWorkflowsUsagesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    usagesResponse?: shared.UsagesResponse;
}
