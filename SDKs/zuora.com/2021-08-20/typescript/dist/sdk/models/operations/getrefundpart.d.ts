import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRefundPartPathParams extends SpeakeasyBase {
    refundId: string;
    refundpartid: string;
}
export declare class GetRefundPartHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRefundPartRequest extends SpeakeasyBase {
    pathParams: GetRefundPartPathParams;
    headers: GetRefundPartHeaders;
}
export declare class GetRefundPartResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    refundPartResponseType?: shared.RefundPartResponseType;
    statusCode: number;
}
