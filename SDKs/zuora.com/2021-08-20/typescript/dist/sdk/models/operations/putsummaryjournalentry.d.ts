import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSummaryJournalEntryPathParams extends SpeakeasyBase {
    jeNumber: string;
}
export declare class PutSummaryJournalEntryHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutSummaryJournalEntryRequest extends SpeakeasyBase {
    pathParams: PutSummaryJournalEntryPathParams;
    headers: PutSummaryJournalEntryHeaders;
}
export declare class PutSummaryJournalEntryResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
