import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRefundPathParams extends SpeakeasyBase {
    refundId: string;
}
export declare class DeleteRefundHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteRefundRequest extends SpeakeasyBase {
    pathParams: DeleteRefundPathParams;
    headers: DeleteRefundHeaders;
}
export declare class DeleteRefundResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
