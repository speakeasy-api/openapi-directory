import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the cardholder of a credit card payment method associated with an account. If you do not provide information about the cardholder, Zuora uses the account's bill-to contact.
 *
 * @remarks
 *
 */
export declare class AccountCreditCardHolder extends SpeakeasyBase {
    /**
     * First line of the cardholder's address.
     *
     * @remarks
     *
     */
    addressLine1?: string;
    /**
     * Second line of the cardholder's address.
     *
     * @remarks
     *
     */
    addressLine2?: string;
    /**
     * Full name of the cardholder as it appears on the card. For example, "John J Smith".
     *
     * @remarks
     *
     */
    cardHolderName?: string;
    /**
     * City of the cardholder's address.
     *
     * @remarks
     *
     */
    city?: string;
    /**
     * Country of the cardholder's address. The value of this field must be a valid country name or abbreviation.
     *
     * @remarks
     *
     */
    country?: string;
    /**
     * Email address of the cardholder.
     *
     * @remarks
     *
     */
    email?: string;
    /**
     * Phone number of the cardholder.
     *
     * @remarks
     *
     */
    phone?: string;
    /**
     * State or province of the cardholder's address.
     *
     * @remarks
     *
     */
    state?: string;
    /**
     * ZIP code or other postal code of the cardholder's address.
     *
     * @remarks
     *
     */
    zipCode?: string;
}
