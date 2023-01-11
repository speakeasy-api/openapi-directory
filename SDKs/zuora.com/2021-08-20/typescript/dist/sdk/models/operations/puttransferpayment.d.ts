import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTransferPaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class PutTransferPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutTransferPaymentRequest extends SpeakeasyBase {
    pathParams: PutTransferPaymentPathParams;
    headers: PutTransferPaymentHeaders;
    request: shared.TransferPaymentType;
}
export declare class PutTransferPaymentResponse extends SpeakeasyBase {
    contentType: string;
    getarPaymentType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
