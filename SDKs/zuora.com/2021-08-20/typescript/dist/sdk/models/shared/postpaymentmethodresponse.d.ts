import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error information. Only applicable if the payment method was not created.
 *
**/
export declare class PostPaymentMethodResponseReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class PostPaymentMethodResponse extends SpeakeasyBase {
    id?: string;
    processId?: string;
    reasons?: PostPaymentMethodResponseReasons[];
    success?: boolean;
}
