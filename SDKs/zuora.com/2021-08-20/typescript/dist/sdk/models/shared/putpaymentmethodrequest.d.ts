import { SpeakeasyBase } from "../../../internal/utils";
import { PUTPMAccountHolderInfo } from "./putpmaccountholderinfo";
/**
 * The field used to pass gateway-specific parameters and parameter values.
 *
 * @remarks
 *
 */
export declare class PUTPaymentMethodRequestGatewayOptions extends SpeakeasyBase {
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
/**
 * Container for custom fields of a payment method object.
 *
 * @remarks
 *
 */
export declare class PUTPaymentMethodRequest extends SpeakeasyBase {
    accountHolderInfo?: PUTPMAccountHolderInfo;
    /**
     * Specifies the ID of the payment gateway that Zuora will use to authorize the payments that are made with the payment method.
     *
     * @remarks
     *
     */
    authGateway?: string;
    /**
     * The currency used for payment method authorization.
     *
     * @remarks
     *
     */
    currencyCode?: string;
    /**
     * One or two digits expiration month (1-12).
     *
     * @remarks
     *
     *
     */
    expirationMonth?: number;
    /**
     * Four-digit expiration year.
     *
     * @remarks
     *
     */
    expirationYear?: number;
    /**
     * The field used to pass gateway-specific parameters and parameter values.
     *
     * @remarks
     *
     */
    gatewayOptions?: PUTPaymentMethodRequestGatewayOptions;
    /**
     * Optional. It is the CVV or CVV2 security code specific for the credit card or debit card. To ensure PCI compliance, this value is not stored and cannot be queried.
     *
     * @remarks
     *
     * If securityCode code is not passed in the request payload, this operation only updates related fields in the payload. It does not validate the payment method through the gateway.
     *
     * If securityCode is passed in the request payload, this operation retrieves the credit card information from payload and validates them through the gateway.
     *
     */
    securityCode?: string;
}
