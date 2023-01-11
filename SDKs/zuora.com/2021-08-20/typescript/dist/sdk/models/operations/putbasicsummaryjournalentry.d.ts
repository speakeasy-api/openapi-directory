import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutBasicSummaryJournalEntryPathParams extends SpeakeasyBase {
    jeNumber: string;
}
export declare class PutBasicSummaryJournalEntryHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutBasicSummaryJournalEntryRequest extends SpeakeasyBase {
    pathParams: PutBasicSummaryJournalEntryPathParams;
    headers: PutBasicSummaryJournalEntryHeaders;
    request: Record<string, any>;
}
export declare class PutBasicSummaryJournalEntryResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
