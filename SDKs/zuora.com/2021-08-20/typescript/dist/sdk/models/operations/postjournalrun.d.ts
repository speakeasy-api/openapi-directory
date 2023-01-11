import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostJournalRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostJournalRunRequest extends SpeakeasyBase {
    headers: PostJournalRunHeaders;
    request: shared.PostJournalRunType;
}
export declare class PostJournalRunResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postJournalRunResponseType?: shared.PostJournalRunResponseType;
    statusCode: number;
}
