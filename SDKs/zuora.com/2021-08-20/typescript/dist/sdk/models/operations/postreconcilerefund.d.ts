import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostReconcileRefundPathParams extends SpeakeasyBase {
    refundId: string;
}
export declare class PostReconcileRefundHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostReconcileRefundRequest extends SpeakeasyBase {
    pathParams: PostReconcileRefundPathParams;
    headers: PostReconcileRefundHeaders;
    request: shared.PostReconcileRefundRequest;
}
export declare class PostReconcileRefundResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postReconcileRefundResponse?: shared.PostReconcileRefundResponse;
    statusCode: number;
}
