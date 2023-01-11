import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSummaryJournalEntryPathParams extends SpeakeasyBase {
    jeNumber: string;
}
export declare class GetSummaryJournalEntryHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetSummaryJournalEntryRequest extends SpeakeasyBase {
    pathParams: GetSummaryJournalEntryPathParams;
    headers: GetSummaryJournalEntryHeaders;
}
export declare class GetSummaryJournalEntryResponse extends SpeakeasyBase {
    contentType: string;
    getJournalEntryDetailType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
