import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for cardholder information. If provided, Zuora will
 *
 * @remarks
 * only use this information for this card. Otherwise, Zuora will use
 * the account''s existing bill-to contact information for this card.
 *
 */
export declare class CreatePaymentMethodCardholderInfo extends SpeakeasyBase {
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
    city?: string;
    /**
     * Country, must be a valid country name or abbreviation.
     *
     * @remarks
     *
     */
    country?: string;
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
    state?: string;
    /**
     * Zip code, 20 characters or less.
     *
     * @remarks
     *
     */
    zipCode?: string;
}
