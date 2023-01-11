import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPaymentMethodsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostPaymentMethodsRequest extends SpeakeasyBase {
    headers: PostPaymentMethodsHeaders;
    request: Record<string, any>;
}
export declare class PostPaymentMethodsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postPaymentMethodResponse?: shared.PostPaymentMethodResponse;
    statusCode: number;
}
