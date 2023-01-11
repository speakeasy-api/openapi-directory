import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBillingPreviewRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostBillingPreviewRun200ApplicationJson extends SpeakeasyBase {
    billingPreviewRunId?: string;
    success?: boolean;
}
export declare class PostBillingPreviewRunRequest extends SpeakeasyBase {
    headers: PostBillingPreviewRunHeaders;
    request: shared.PostBillingPreviewRunParam;
}
export declare class PostBillingPreviewRunResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postBillingPreviewRun200ApplicationJSONObject?: PostBillingPreviewRun200ApplicationJson;
    statusCode: number;
}
