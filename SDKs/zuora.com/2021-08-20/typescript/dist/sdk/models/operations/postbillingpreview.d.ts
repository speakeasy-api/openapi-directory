import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBillingPreviewHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostBillingPreviewRequest extends SpeakeasyBase {
    headers: PostBillingPreviewHeaders;
    request: shared.PostBillingPreviewParam;
}
export declare class PostBillingPreviewResponse extends SpeakeasyBase {
    billingPreviewResult?: shared.BillingPreviewResult;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
