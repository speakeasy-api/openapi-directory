import { SpeakeasyBase } from "../../../internal/utils";
import { AppKeyItems } from "./appkeyitems";
import { LicenseItems } from "./licenseitems";
import { SiteItems } from "./siteitems";
/**
 * Deprecated. Check appKeys object for all appKeys
 */
export declare class AccountResponseAppKey extends SpeakeasyBase {
    name?: string;
    token?: string;
}
export declare class AccountResponseContact extends SpeakeasyBase {
    /**
     * Email of the contact
     */
    email?: string;
    /**
     * Name of the contact
     */
    name?: string;
    /**
     * Phone of the contact
     */
    phone?: string;
}
/**
 * Object representing the sponsor user
 */
export declare class AccountResponseSponsor extends SpeakeasyBase {
    /**
     * Email of the sponsor user
     */
    email?: string;
    /**
     * Name of the sponsor user
     */
    name?: string;
    /**
     * Phone of the sponsor user
     */
    phone?: string;
}
/**
 * Successful response for `/api/vlm/account`
 */
export declare class AccountResponse extends SpeakeasyBase {
    /**
     * Account name
     */
    accountName?: string;
    /**
     * Address of contact
     */
    address?: string;
    /**
     * Deprecated. Check appKeys object for all appKeys
     */
    appKey?: AccountResponseAppKey;
    /**
     * Array of application keys
     */
    appKeys?: AppKeyItems[];
    /**
     * City of contact
     */
    city?: string;
    /**
     * CNPJ (Tax ID) of account
     */
    cnpj?: string;
    /**
     * Company name
     */
    companyName?: string;
    /**
     * Additional address of contact
     */
    complement?: string;
    contact?: AccountResponseContact;
    /**
     * Country of contact
     */
    country?: string;
    /**
     * The date when the account was created
     */
    creationDate?: Date;
    defaultUrl?: string;
    /**
     * Neighborhood of contact
     */
    district?: string;
    /**
     * If logo has been setup
     */
    hasLogo?: boolean;
    /**
     * If it has a parent account
     */
    haveParentAccount?: boolean;
    /**
     * Hosts of all stores
     */
    hosts?: string[];
    /**
     * ID of the account
     */
    id?: string;
    /**
     * The date when the account was deactivated
     */
    inactivationDate?: Date;
    /**
     * If account is active or not
     */
    isActive?: boolean;
    /**
     * If it is in production
     */
    isOperating?: boolean;
    /**
     * Licenses of the account
     */
    licenses?: LicenseItems[];
    /**
     * Filename of account logo
     */
    logo?: string;
    lv?: string;
    /**
     * Trading name
     */
    name?: string;
    /**
     * Number of the address of contact
     */
    number?: string;
    /**
     * The date when the account went into production
     */
    operationDate?: Date;
    /**
     * The ID of the parent account
     */
    parentAccountId?: string;
    /**
     * The name of the parent account
     */
    parentAccountName?: string;
    /**
     * Zip Code of contact
     */
    postalCode?: string;
    /**
     * Array of objects representing a store
     */
    sites?: SiteItems[];
    /**
     * Object representing the sponsor user
     */
    sponsor?: AccountResponseSponsor;
    /**
     * State/Province of contact
     */
    state?: string;
    /**
     * Telephone of contact
     */
    telephone?: string;
    /**
     * Trading name
     */
    tradingName?: string;
}
