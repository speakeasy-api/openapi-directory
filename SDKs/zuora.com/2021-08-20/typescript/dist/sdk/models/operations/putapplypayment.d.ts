import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApplyPaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class PutApplyPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutApplyPaymentRequest extends SpeakeasyBase {
    pathParams: PutApplyPaymentPathParams;
    headers: PutApplyPaymentHeaders;
    request: shared.ApplyPaymentType;
}
export declare class PutApplyPaymentResponse extends SpeakeasyBase {
    contentType: string;
    getarPaymentType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
