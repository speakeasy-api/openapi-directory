import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePaymentMethodsPathParams extends SpeakeasyBase {
    paymentMethodId: string;
}
export declare class DeletePaymentMethodsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeletePaymentMethodsRequest extends SpeakeasyBase {
    pathParams: DeletePaymentMethodsPathParams;
    headers: DeletePaymentMethodsHeaders;
}
export declare class DeletePaymentMethodsResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
