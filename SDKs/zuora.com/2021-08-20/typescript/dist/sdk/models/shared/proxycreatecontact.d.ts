import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Contact object.
 *
 * @remarks
 *
 */
export declare class ProxyCreateContact extends SpeakeasyBase {
    /**
     *  The Zuora account ID associated with this contact. This field is not required when you use the Subscribe call. This field is required for all other calls.
     *
     * @remarks
     * **Character limit: **32 **Values: **a valid account ID
     */
    accountId: string;
    /**
     *  The first line of the contact's address, which is often a street address or business name.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    address1?: string;
    /**
     *  The second line of the contact's address.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    address2?: string;
    /**
     *  The city of the contact's address.
     *
     * @remarks
     * **Character limit**: 40 **Values: **a string of 40 characters or fewer
     */
    city?: string;
    /**
     *  The country of the contact's address.
     */
    country?: string;
    /**
     *  The county. May optionally be used by Zuora Tax to calculate county tax.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a string of 32 characters or fewer
     */
    county?: string;
    /**
     *  A description for the contact.
     *
     * @remarks
     * **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    description?: string;
    /**
     *  The contact's fax number.
     *
     * @remarks
     * **Character limit**: 40 **Values**: a string of 40 characters or fewer
     */
    fax?: string;
    /**
     *  The contact's first name.
     *
     * @remarks
     * **Character limit**: 100 **Values**: a string of the contact's first name
     */
    firstName: string;
    /**
     *  The contact's home phone number.
     *
     * @remarks
     * **Character limit**: 40 **Values**: a string of 40 characters or fewer
     */
    homePhone?: string;
    /**
     *  The contact's last name.
     *
     * @remarks
     * **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    lastName: string;
    /**
     *  The contact's mobile phone number.
     *
     * @remarks
     * **Character limit**: 40 **Values**: a string of 40 characters or fewer
     */
    mobilePhone?: string;
    /**
     *  A nickname for the contact.
     *
     * @remarks
     * **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    nickName?: string;
    /**
     *  An additional phone number for the contact.
     *
     * @remarks
     * **Character limit**: 40 **Values**: a string of 40 characters or fewer
     */
    otherPhone?: string;
    /**
     * The type of the `OtherPhone`. **Character limit**: 20 **Values**: `Work`, `Mobile`, `Home`, `Other`
     */
    otherPhoneType?: string;
    /**
     *  The contact's personal email address.
     *
     * @remarks
     * **Character limit**: 80 **Values**: a string of 80 characters or fewer
     */
    personalEmail?: string;
    /**
     *  The zip code for the contact's address.
     *
     * @remarks
     * **Character limit:** 20 **Values: **a string of 20 characters or fewer
     */
    postalCode?: string;
    /**
     *  The state or province of the contact's address.
     */
    state?: string;
    /**
     * If using Zuora Tax rules
     */
    taxRegion?: string;
    /**
     *  The contact's business email address.
     *
     * @remarks
     * **Character limit**: 80 **Values**: a string of 80 characters or fewer
     */
    workEmail?: string;
    /**
     *  The contact's business phone number.
     *
     * @remarks
     * **Character limit**: 40 **notes**: -- **Values**: a string of 40 characters or fewer
     */
    workPhone?: string;
}
