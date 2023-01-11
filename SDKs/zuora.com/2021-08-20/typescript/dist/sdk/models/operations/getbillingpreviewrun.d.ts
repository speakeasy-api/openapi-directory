import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBillingPreviewRunPathParams extends SpeakeasyBase {
    billingPreviewRunId: string;
}
export declare class GetBillingPreviewRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetBillingPreviewRunRequest extends SpeakeasyBase {
    pathParams: GetBillingPreviewRunPathParams;
    headers: GetBillingPreviewRunHeaders;
}
export declare class GetBillingPreviewRunResponse extends SpeakeasyBase {
    contentType: string;
    getBillingPreviewRunResponse?: shared.GetBillingPreviewRunResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
