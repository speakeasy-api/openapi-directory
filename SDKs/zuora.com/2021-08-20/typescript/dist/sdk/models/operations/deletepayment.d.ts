import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class DeletePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeletePaymentRequest extends SpeakeasyBase {
    pathParams: DeletePaymentPathParams;
    headers: DeletePaymentHeaders;
}
export declare class DeletePaymentResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
