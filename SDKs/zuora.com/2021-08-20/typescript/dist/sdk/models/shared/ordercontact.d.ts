import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Use this field to create a new account as the sold-to contact of the Order Line Item (OLI).
 *
 * @remarks
 *
 * You can either use this field to create a new account or use the `soldTo` field to assign an existing account as the sold-to contact of the OLI.
 *
 * If neither this field nor the `soldTo` field is set, the system will automatically set the default sold-to contact under the OLI's invoice owner account as the sold-to contact of the OLI.
 *
 */
export declare class OrderContact extends SpeakeasyBase {
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
