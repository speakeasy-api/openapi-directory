import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSequenceSetsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostSequenceSetsRequest extends SpeakeasyBase {
    headers: PostSequenceSetsHeaders;
    request: shared.PostSequenceSetsRequest;
}
export declare class PostSequenceSetsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postSequenceSetsResponse?: shared.PostSequenceSetsResponse;
    statusCode: number;
}
