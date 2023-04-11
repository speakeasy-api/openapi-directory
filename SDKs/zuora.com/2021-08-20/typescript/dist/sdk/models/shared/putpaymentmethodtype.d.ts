import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The field used to pass gateway-specific parameters and parameter values.
 *
 * @remarks
 *
 */
export declare class PUTPaymentMethodTypeGatewayOptions extends SpeakeasyBase {
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
export declare class PUTPaymentMethodType extends SpeakeasyBase {
    /**
     * First address line, 255 characters or less.
     *
     * @remarks
     *
     */
    addressLine1?: string;
    /**
     * Second address line, 255 characters or less.
     *
     * @remarks
     *
     */
    addressLine2?: string;
    /**
     * The full name as it appears on the card, e.g., "John J Smith", 50 characters or less.
     *
     * @remarks
     *
     */
    cardHolderName?: string;
    /**
     * City, 40 characters or less.
     *
     * @remarks
     *
     */
    city?: string;
    /**
     * Country; must be a valid country name or abbreviation.
     *
     * @remarks
     *
     */
    country?: string;
    /**
     * Specify "true" to make this card the default payment method; otherwise, omit this parameter to keep the current default payment method.
     *
     * @remarks
     *
     */
    defaultPaymentMethod?: boolean;
    /**
     * Card holder's email address, 80 characters or less.
     *
     * @remarks
     *
     */
    email?: string;
    /**
     * One or two digit(s) expiration month (1-12).
     *
     * @remarks
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
    gatewayOptions?: PUTPaymentMethodTypeGatewayOptions;
    /**
     * The number of consecutive failed payments for this payment method. It is reset to `0` upon successful payment.
     *
     * @remarks
     *
     */
    numConsecutiveFailures?: number;
    /**
     * Phone number, 40 characters or less.
     *
     * @remarks
     *
     */
    phone?: string;
    /**
     * The CVV or CVV2 security code for the credit card or debit card. Only required if changing expirationMonth, expirationYear, or cardHolderName. To ensure PCI compliance, this value isn't stored and can't be queried.
     *
     * @remarks
     *
     *
     */
    securityCode?: string;
    /**
     * State; must be a valid state name or 2-character abbreviation.
     *
     * @remarks
     *
     */
    state?: string;
    /**
     * Zip code, 20 characters or less.
     *
     * @remarks
     *
     */
    zipCode?: string;
}
