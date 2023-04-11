import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the type of phone number in the `otherPhone` field.
 *
 * @remarks
 *
 */
export declare enum BillToContactPostOrderOtherPhoneTypeEnum {
    Work = "Work",
    Mobile = "Mobile",
    Home = "Home",
    Other = "Other"
}
/**
 * Container for custom fields of a Contact object.
 *
 * @remarks
 *
 */
export declare class BillToContactPostOrder extends SpeakeasyBase {
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
     * A description for the contact.
     *
     * @remarks
     *
     */
    contactDescription?: string;
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
     * Fax number of the contact.
     *
     * @remarks
     *
     */
    fax?: string;
    /**
     * First name of the contact.
     *
     * @remarks
     *
     */
    firstName: string;
    /**
     * Home phone number of the contact.
     *
     * @remarks
     *
     */
    homePhone?: string;
    /**
     * Last name of the contact.
     *
     * @remarks
     *
     */
    lastName: string;
    /**
     * Mobile phone number of the contact.
     *
     * @remarks
     *
     */
    mobilePhone?: string;
    /**
     * Nickname of the contact.
     *
     * @remarks
     *
     */
    nickname?: string;
    /**
     * Additional phone number of the contact. Use the `otherPhoneType` field to specify the type of phone number.
     *
     * @remarks
     *
     */
    otherPhone?: string;
    /**
     * Specifies the type of phone number in the `otherPhone` field.
     *
     * @remarks
     *
     */
    otherPhoneType?: BillToContactPostOrderOtherPhoneTypeEnum;
    /**
     * Personal email address of the contact.
     *
     * @remarks
     *
     */
    personalEmail?: string;
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
    /**
     * Region defined in your taxation rules. Only applicable if you use Zuora Tax.
     *
     * @remarks
     *
     */
    taxRegion?: string;
    /**
     * Business email address of the contact.
     *
     * @remarks
     *
     */
    workEmail?: string;
    /**
     * Business phone number of the contact.
     *
     * @remarks
     *
     */
    workPhone?: string;
}
