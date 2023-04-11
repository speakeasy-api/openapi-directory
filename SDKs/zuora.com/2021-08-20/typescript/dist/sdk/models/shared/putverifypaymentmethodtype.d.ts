import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The field used to pass gateway-specific parameters and parameter values.
 *
 * @remarks
 *
 */
export declare class PUTVerifyPaymentMethodTypeGatewayOptions extends SpeakeasyBase {
    /**
     * The name of a gateway-specific parameter.
     *
     * @remarks
     *
     */
    key?: string;
    /**
     * The value of the gateway-specific parameter.
     *
     * @remarks
     *
     */
    value?: string;
}
export declare class PUTVerifyPaymentMethodType extends SpeakeasyBase {
    /**
     * The currency used for payment method authorization.
     *
     * @remarks
     *
     */
    currencyCode?: string;
    /**
     * The field used to pass gateway-specific parameters and parameter values.
     *
     * @remarks
     *
     */
    gatewayOptions?: PUTVerifyPaymentMethodTypeGatewayOptions;
    /**
     * The name of the payment gateway instance. If no value is specified for this field, the default payment gateway of the customer account will be used.
     *
     * @remarks
     *
     */
    paymentGatewayName?: string;
    /**
     * The CVV or CVV2 security code for the credit card or debit card. To ensure PCI compliance, the value of this field is not stored and cannot be queried.
     *
     * @remarks
     *
     */
    securityCode?: string;
}
