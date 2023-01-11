import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSummaryJournalEntryHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostSummaryJournalEntryRequest extends SpeakeasyBase {
    headers: PostSummaryJournalEntryHeaders;
    request: Record<string, any>;
}
export declare class PostSummaryJournalEntryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postJournalEntryResponseType?: shared.PostJournalEntryResponseType;
    statusCode: number;
}
