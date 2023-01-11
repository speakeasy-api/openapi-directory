import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPreviewSubscriptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PostPreviewSubscriptionRequest extends SpeakeasyBase {
    headers: PostPreviewSubscriptionHeaders;
    request: Record<string, any>;
}
export declare class PostPreviewSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postSubscriptionPreviewResponseType?: shared.PostSubscriptionPreviewResponseType;
    statusCode: number;
}
