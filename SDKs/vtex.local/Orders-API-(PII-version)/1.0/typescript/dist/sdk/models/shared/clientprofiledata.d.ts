import { SpeakeasyBase } from "../../../internal/utils";
export declare class ClientProfileData extends SpeakeasyBase {
    /**
     * Company document, in case client is corporate.
     */
    corporateDocument: string;
    /**
     * Company name, in case client is corporate.
     */
    corporateName: string;
    /**
     * Company telephone number, in case client is corporate.
     */
    corporatePhone: string;
    /**
     * Customer class.
     */
    customerClass: string;
    /**
     * Client document.
     */
    document: string;
    /**
     * Client document type.
     */
    documentType: string;
    /**
     * Client email address.
     */
    email: string;
    /**
     * Client first name.
     */
    firstName: string;
    /**
     * Client ID.
     */
    id: string;
    /**
     * Indicates whether client is corporate.
     */
    isCorporate: boolean;
    /**
     * Client last name.
     */
    lastName: string;
    /**
     * Client telephone number.
     */
    phone: string;
    /**
     * Company state inscription, in case client is corporate.
     */
    stateInscription: string;
    /**
     * Company trade name, in case client is corporate.
     */
    tradeName: string;
    /**
     * User profile ID.
     */
    userProfileId: string;
}
