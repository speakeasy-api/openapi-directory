import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmailHistoryQueryParams extends SpeakeasyBase {
    endTime?: Date;
    eventCategory?: string;
    failedOnly?: boolean;
    objectId?: string;
    pageSize?: number;
    startTime?: Date;
}
export declare class GetEmailHistoryHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetEmailHistoryRequest extends SpeakeasyBase {
    queryParams: GetEmailHistoryQueryParams;
    headers: GetEmailHistoryHeaders;
}
export declare class GetEmailHistoryResponse extends SpeakeasyBase {
    contentType: string;
    getEmailHistoryVOsType?: shared.GetEmailHistoryVOsType;
    headers: Record<string, string[]>;
    statusCode: number;
}
