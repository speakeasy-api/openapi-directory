import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCalloutHistoryQueryParams extends SpeakeasyBase {
    endTime?: Date;
    eventCategory?: string;
    failedOnly?: boolean;
    includeResponseContent?: boolean;
    objectId?: string;
    pageSize?: number;
    startTime?: Date;
}
export declare class GetCalloutHistoryHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetCalloutHistoryRequest extends SpeakeasyBase {
    queryParams: GetCalloutHistoryQueryParams;
    headers: GetCalloutHistoryHeaders;
}
export declare class GetCalloutHistoryResponse extends SpeakeasyBase {
    contentType: string;
    getCalloutHistoryVOsType?: shared.GetCalloutHistoryVOsType;
    headers: Record<string, string[]>;
    statusCode: number;
}
