import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutUpdateRefundPathParams extends SpeakeasyBase {
    refundId: string;
}
export declare class PutUpdateRefundHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUpdateRefundRequest extends SpeakeasyBase {
    pathParams: PutUpdateRefundPathParams;
    headers: PutUpdateRefundHeaders;
    request: Record<string, any>;
}
export declare class PutUpdateRefundResponse extends SpeakeasyBase {
    contentType: string;
    getRefundType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
