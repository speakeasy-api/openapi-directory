import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The field used to pass gateway-specific parameters and parameter values.
 *
**/
export declare class PutVerifyPaymentMethodTypeGatewayOptions extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class PutVerifyPaymentMethodType extends SpeakeasyBase {
    currencyCode?: string;
    gatewayOptions?: PutVerifyPaymentMethodTypeGatewayOptions;
    paymentGatewayName?: string;
    securityCode?: string;
}
