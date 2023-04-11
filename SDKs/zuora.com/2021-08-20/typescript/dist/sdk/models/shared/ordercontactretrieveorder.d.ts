import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A new account created as the sold-to contact of the Order Line Item (OLI).
 *
 * @remarks
 *
 */
export declare class OrderContactRetrieveOrder extends SpeakeasyBase {
    /**
     * First line of the contact's address. This is often a street address or a business name.
     *
     * @remarks
     *
     */
    address1?: string;
    /**
     * Second line of the contact's address.
     *
     * @remarks
     *
     */
    address2?: string;
    /**
     * City of the contact's address.
     *
     * @remarks
     *
     */
    city?: string;
    /**
     * Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the bill-to contact to calculate tax.
     *
     * @remarks
     *
     */
    country?: string;
    /**
     * County of the contact's address.
     *
     * @remarks
     *
     */
    county?: string;
    /**
     * First name of the contact.
     *
     * @remarks
     *
     */
    firstName?: string;
    /**
     * Last name of the contact.
     *
     * @remarks
     *
     */
    lastName?: string;
    /**
     * ZIP code or other postal code of the contact's address.
     *
     * @remarks
     *
     */
    postalCode?: string;
    /**
     * State or province of the contact's address.
     *
     * @remarks
     *
     */
    state?: string;
}
