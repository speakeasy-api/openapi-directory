import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCreateOrderAsynchronouslyQueryParams extends SpeakeasyBase {
    returnIds?: boolean;
}
export declare class PostCreateOrderAsynchronouslyHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PostCreateOrderAsynchronously202ApplicationJson extends SpeakeasyBase {
    jobId?: string;
    success?: boolean;
}
export declare class PostCreateOrderAsynchronouslyRequest extends SpeakeasyBase {
    queryParams: PostCreateOrderAsynchronouslyQueryParams;
    headers: PostCreateOrderAsynchronouslyHeaders;
    request: shared.PostOrderRequestType;
}
export declare class PostCreateOrderAsynchronouslyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postCreateOrderAsynchronously202ApplicationJSONObject?: PostCreateOrderAsynchronously202ApplicationJson;
    statusCode: number;
}
