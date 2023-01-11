import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentMethodsCreditCardPathParams extends SpeakeasyBase {
    accountKey: string;
}
export declare class GetPaymentMethodsCreditCardQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetPaymentMethodsCreditCardHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetPaymentMethodsCreditCardRequest extends SpeakeasyBase {
    pathParams: GetPaymentMethodsCreditCardPathParams;
    queryParams: GetPaymentMethodsCreditCardQueryParams;
    headers: GetPaymentMethodsCreditCardHeaders;
}
export declare class GetPaymentMethodsCreditCardResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentMethodsType?: shared.GetPaymentMethodsType;
    headers: Record<string, string[]>;
    statusCode: number;
}
