import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPreviewOrderHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostPreviewOrderRequest extends SpeakeasyBase {
    headers: PostPreviewOrderHeaders;
    request: shared.PostOrderPreviewRequestType;
}
export declare class PostPreviewOrderResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postOrderPreviewResponseType?: shared.PostOrderPreviewResponseType;
    statusCode: number;
}
