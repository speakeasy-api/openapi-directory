import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateUpdateProfileRequests extends SpeakeasyBase {
    /**
     * Client document.
     */
    document?: string;
    /**
     * Client document type.
     */
    documentType?: string;
    /**
     * Client email address.
     */
    email?: string;
    /**
     * Client first name.
     */
    firstName?: string;
    /**
     * Indicates whether client is corporate.
     */
    isCorporate?: boolean;
    /**
     * Indicates whether client otped to receive the store newsletter.
     */
    isNewsletterOptIn?: boolean;
    /**
     * Client last name.
     */
    lastName?: string;
    /**
     * Default locale, used to set store language and currency, for example.
     */
    localeDefault?: string;
    /**
     * Client telephone number.
     */
    phone?: string;
}
