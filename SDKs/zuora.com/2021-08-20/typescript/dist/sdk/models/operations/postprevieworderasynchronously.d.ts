import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPreviewOrderAsynchronouslyHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostPreviewOrderAsynchronously202ApplicationJson extends SpeakeasyBase {
    jobId?: string;
}
export declare class PostPreviewOrderAsynchronouslyRequest extends SpeakeasyBase {
    headers: PostPreviewOrderAsynchronouslyHeaders;
    request: shared.PostOrderPreviewRequestType;
}
export declare class PostPreviewOrderAsynchronouslyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postPreviewOrderAsynchronously202ApplicationJSONObject?: PostPreviewOrderAsynchronously202ApplicationJson;
    statusCode: number;
}
