import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUnapplyPaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class PutUnapplyPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUnapplyPaymentRequest extends SpeakeasyBase {
    pathParams: PutUnapplyPaymentPathParams;
    headers: PutUnapplyPaymentHeaders;
    request: shared.UnapplyPaymentType;
}
export declare class PutUnapplyPaymentResponse extends SpeakeasyBase {
    contentType: string;
    getarPaymentType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
