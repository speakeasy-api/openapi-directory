import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPaymentMethodsCreditCardPathParams extends SpeakeasyBase {
    paymentMethodId: string;
}
export declare class PutPaymentMethodsCreditCardHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutPaymentMethodsCreditCardRequest extends SpeakeasyBase {
    pathParams: PutPaymentMethodsCreditCardPathParams;
    headers: PutPaymentMethodsCreditCardHeaders;
    request: Record<string, any>;
}
export declare class PutPaymentMethodsCreditCardResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putPaymentMethodResponseType?: shared.PutPaymentMethodResponseType;
    statusCode: number;
}
