import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRefundItemPartPathParams extends SpeakeasyBase {
    itempartid: string;
    refundId: string;
    refundpartid: string;
}
export declare class GetRefundItemPartHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRefundItemPartRequest extends SpeakeasyBase {
    pathParams: GetRefundItemPartPathParams;
    headers: GetRefundItemPartHeaders;
}
export declare class GetRefundItemPartResponse extends SpeakeasyBase {
    contentType: string;
    getRefundItemPartType?: shared.GetRefundItemPartType;
    headers: Record<string, string[]>;
    statusCode: number;
}
