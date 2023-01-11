import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutCancelRefundPathParams extends SpeakeasyBase {
    refundId: string;
}
export declare class PutCancelRefundHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutCancelRefundRequest extends SpeakeasyBase {
    pathParams: PutCancelRefundPathParams;
    headers: PutCancelRefundHeaders;
}
export declare class PutCancelRefundResponse extends SpeakeasyBase {
    contentType: string;
    getRefundType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
