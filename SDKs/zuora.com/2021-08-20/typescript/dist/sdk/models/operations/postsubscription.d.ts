import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSubscriptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PostSubscriptionRequest extends SpeakeasyBase {
    headers: PostSubscriptionHeaders;
    request: Record<string, any>;
}
export declare class PostSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postSubscriptionResponseType?: shared.PostSubscriptionResponseType;
    statusCode: number;
}
