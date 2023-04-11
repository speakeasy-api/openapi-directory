import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Contact object.
 *
 * @remarks
 *
 */
export declare class PUTAccountTypeBillToContact extends SpeakeasyBase {
    /**
     * First address line, 255 characters or less.
     *
     * @remarks
     *
     */
    address1?: string;
    /**
     * Second address line, 255 characters or less.
     *
     * @remarks
     *
     */
    address2?: string;
    /**
     * City, 40 characters or less.
     *
     * @remarks
     *
     */
    city?: string;
    /**
     * Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the sold-to contact to calculate tax. A bill-to contact may be used if no sold-to contact is provided.
     *
     * @remarks
     *
     */
    country?: string;
    /**
     * County; 32 characters or less. May optionally be used by Zuora Tax to calculate county tax.
     *
     * @remarks
     *
     */
    county?: string;
    /**
     * Fax phone number, 40 characters or less.
     *
     * @remarks
     *
     */
    fax?: string;
    /**
     * First name, 100 characters or less.
     *
     * @remarks
     *
     */
    firstName: string;
    /**
     * Home phone number, 40 characters or less.
     *
     * @remarks
     *
     */
    homePhone?: string;
    /**
     * Last name, 100 characters or less.
     *
     * @remarks
     *
     */
    lastName: string;
    /**
     * Mobile phone number, 40 characters or less.
     *
     * @remarks
     *
     */
    mobilePhone?: string;
    /**
     * Nickname for this contact
     *
     * @remarks
     *
     */
    nickname?: string;
    /**
     * Other phone number, 40 characters or less.
     *
     * @remarks
     *
     */
    otherPhone?: string;
    /**
     * Possible values are: `Work`, `Mobile`, `Home`, `Other`.
     *
     * @remarks
     *
     */
    otherPhoneType?: string;
    /**
     * Personal email address, 80 characters or less.
     *
     * @remarks
     *
     */
    personalEmail?: string;
    /**
     * State; must be a valid state or province name or 2-character abbreviation. If using Zuora Tax, be aware that Zuora Tax requires a state (in the US) or province (in Canada) in this field for the sold-to contact to calculate tax, and that a bill-to contact may be used if no sold-to contact is provided.
     *
     * @remarks
     *
     */
    state?: string;
    /**
     * If using Zuora Tax, a region string as optionally defined in your tax rules. Not required.
     *
     * @remarks
     *
     */
    taxRegion?: string;
    /**
     * Work email address, 80 characters or less.
     *
     * @remarks
     *
     */
    workEmail?: string;
    /**
     * Work phone number, 40 characters or less.
     *
     * @remarks
     *
     */
    workPhone?: string;
    /**
     * Zip code, 20 characters or less.
     *
     * @remarks
     *
     */
    zipCode?: string;
}
