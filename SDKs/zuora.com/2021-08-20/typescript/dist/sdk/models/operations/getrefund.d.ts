import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRefundPathParams extends SpeakeasyBase {
    refundId: string;
}
export declare class GetRefundHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRefundRequest extends SpeakeasyBase {
    pathParams: GetRefundPathParams;
    headers: GetRefundHeaders;
}
export declare class GetRefundResponse extends SpeakeasyBase {
    contentType: string;
    getRefundType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
