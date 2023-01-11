import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutScrubPaymentMethodsPathParams extends SpeakeasyBase {
    paymentMethodId: string;
}
export declare class PutScrubPaymentMethodsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutScrubPaymentMethodsRequest extends SpeakeasyBase {
    pathParams: PutScrubPaymentMethodsPathParams;
    headers: PutScrubPaymentMethodsHeaders;
}
export declare class PutScrubPaymentMethodsResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
