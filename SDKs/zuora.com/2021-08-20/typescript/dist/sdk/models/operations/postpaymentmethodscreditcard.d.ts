import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPaymentMethodsCreditCardHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostPaymentMethodsCreditCardRequest extends SpeakeasyBase {
    headers: PostPaymentMethodsCreditCardHeaders;
    request: Record<string, any>;
}
export declare class PostPaymentMethodsCreditCardResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postPaymentMethodResponseType?: shared.PostPaymentMethodResponseType;
    statusCode: number;
}
