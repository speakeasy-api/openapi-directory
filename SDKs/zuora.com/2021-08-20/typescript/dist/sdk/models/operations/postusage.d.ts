import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsageHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostUsageRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostUsageRequestBody extends SpeakeasyBase {
    file: PostUsageRequestBodyFile;
}
export declare class PostUsageRequest extends SpeakeasyBase {
    headers: PostUsageHeaders;
    request: PostUsageRequestBody;
}
export declare class PostUsageResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postUsageResponseType?: shared.PostUsageResponseType;
    statusCode: number;
}
