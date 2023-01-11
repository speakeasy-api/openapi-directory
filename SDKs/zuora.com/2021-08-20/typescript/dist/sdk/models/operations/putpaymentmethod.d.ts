import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPaymentMethodPathParams extends SpeakeasyBase {
    paymentMethodId: string;
}
export declare class PutPaymentMethodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutPaymentMethodRequest extends SpeakeasyBase {
    pathParams: PutPaymentMethodPathParams;
    headers: PutPaymentMethodHeaders;
    request: Record<string, any>;
}
export declare class PutPaymentMethodResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putPaymentMethodResponse?: shared.PutPaymentMethodResponse;
    statusCode: number;
}
