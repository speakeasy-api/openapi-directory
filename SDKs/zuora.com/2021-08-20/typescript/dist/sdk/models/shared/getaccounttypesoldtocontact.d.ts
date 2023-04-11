import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Contact object.
 *
 * @remarks
 *
 */
export declare class GETAccountTypeSoldToContact extends SpeakeasyBase {
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
     * Full country name. This field does not contain the ISO-standard abbreviation of the country name.
     *
     * @remarks
     *
     */
    country?: string;
    /**
     * County; 32 characters or less. Zuora tax uses this information to calculate county taxation.
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
    firstName?: string;
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
    lastName?: string;
    /**
     * Mobile phone number, 40 characters or less.
     *
     * @remarks
     *
     */
    mobilePhone?: string;
    /**
     * Nickname for this contact.
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
     * Full state name. This field does not contain the ISO-standard abbreviation of the state name.
     *
     * @remarks
     *
     */
    state?: string;
    /**
     * A region string, defined in your Zuora tax rules.
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
