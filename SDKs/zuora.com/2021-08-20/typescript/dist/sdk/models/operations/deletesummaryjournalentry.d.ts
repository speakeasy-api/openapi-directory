import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSummaryJournalEntryPathParams extends SpeakeasyBase {
    jeNumber: string;
}
export declare class DeleteSummaryJournalEntryHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteSummaryJournalEntryRequest extends SpeakeasyBase {
    pathParams: DeleteSummaryJournalEntryPathParams;
    headers: DeleteSummaryJournalEntryHeaders;
}
export declare class DeleteSummaryJournalEntryResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
