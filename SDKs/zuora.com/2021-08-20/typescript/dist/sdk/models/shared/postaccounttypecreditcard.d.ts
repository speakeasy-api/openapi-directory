import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for cardholder information. If provided, Zuora
 *
 * @remarks
 *       will only use this information for this card.  If not provided, Zuora
 *       will use the account''s existing bill-to contact information for this
 *       card.
 *
 */
export declare class POSTAccountTypeCreditCardCardHolderInfo extends SpeakeasyBase {
    /**
     * First address line, 255 characters or less.
     *
     * @remarks
     *
     */
    addressLine1: string;
    /**
     * Second address line, 255 characters or less.
     *
     * @remarks
     *
     */
    addressLine2?: string;
    /**
     * The card holder's full name as it appears on the card, e.g., "John J Smith", 50 characters or less.
     *
     * @remarks
     *
     */
    cardHolderName: string;
    /**
     * City, 40 characters or less.
     *
     * @remarks
     *
     */
    city: string;
    /**
     * Country; must be a valid country name or abbreviation.
     *
     * @remarks
     *
     */
    country: string;
    /**
     * Card holder's email address, 80 characters or less.
     *
     * @remarks
     *
     */
    email?: string;
    /**
     * Phone number, 40 characters or less.
     *
     * @remarks
     *
     */
    phone?: string;
    /**
     * State; must be a valid state name or 2-character abbreviation.
     *
     * @remarks
     *
     */
    state: string;
    /**
     * Zip code, 20 characters or less.
     *
     * @remarks
     *
     */
    zipCode: string;
}
/**
 * Container for custom fields of a payment method object.
 *
 * @remarks
 *
 */
export declare class POSTAccountTypeCreditCard extends SpeakeasyBase {
    /**
     * Container for cardholder information. If provided, Zuora
     *
     * @remarks
     *       will only use this information for this card.  If not provided, Zuora
     *       will use the account''s existing bill-to contact information for this
     *       card.
     *
     */
    cardHolderInfo: POSTAccountTypeCreditCardCardHolderInfo;
    /**
     * Card number, up to 16 characters. Once created, this field can't be updated or queried, and is only available in masked format (e.g., XXXX-XXXX-XXXX-1234).
     *
     * @remarks
     *
     */
    cardNumber: string;
    /**
     * The type of the credit card.
     *
     * @remarks
     *
     * Possible values  include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see [Supported Payment Gateways](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways).
     *
     */
    cardType: string;
    /**
     * Two-digit expiration month (01-12).
     *
     * @remarks
     *
     */
    expirationMonth: string;
    /**
     * Four-digit expiration year.
     *
     * @remarks
     *
     */
    expirationYear: string;
    /**
     * The CVV or CVV2 security code of the card. To ensure PCI compliance, this value is not stored and cannot be queried.
     *
     * @remarks
     *
     */
    securityCode?: string;
}
