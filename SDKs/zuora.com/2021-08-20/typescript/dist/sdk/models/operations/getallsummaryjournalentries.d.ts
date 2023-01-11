import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllSummaryJournalEntriesPathParams extends SpeakeasyBase {
    jrNumber: string;
}
export declare class GetAllSummaryJournalEntriesQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetAllSummaryJournalEntriesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAllSummaryJournalEntriesRequest extends SpeakeasyBase {
    pathParams: GetAllSummaryJournalEntriesPathParams;
    queryParams: GetAllSummaryJournalEntriesQueryParams;
    headers: GetAllSummaryJournalEntriesHeaders;
}
export declare class GetAllSummaryJournalEntriesResponse extends SpeakeasyBase {
    contentType: string;
    getJournalEntriesInJournalRunType?: shared.GetJournalEntriesInJournalRunType;
    headers: Record<string, string[]>;
    statusCode: number;
}
