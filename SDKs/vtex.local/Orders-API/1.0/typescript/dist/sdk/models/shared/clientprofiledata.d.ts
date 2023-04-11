import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object with information on the client's profile.
 */
export declare class ClientProfileData extends SpeakeasyBase {
    /**
     * If the customer is a legal entity, here goes the corporate document.
     */
    corporateDocument: string;
    /**
     * If the customer is a legal entity, here goes the corporate name.
     */
    corporateName: string;
    /**
     * If the customer is a legal entity, here goes the corpany's phone number.
     */
    corporatePhone: string;
    /**
     * Identification of the class the customer belongs to.
     */
    customerClass: string;
    /**
     * Document identification code informed by the customer.
     */
    document: string;
    /**
     * Type of the document informed by the customer.
     */
    documentType: string;
    /**
     * Customer's email.
     */
    email: string;
    /**
     * Customer's first name.
     */
    firstName: string;
    /**
     * Object ID, the expected value is `clientProfileData`.
     */
    id: string;
    /**
     * The value is `true` when the customer is a legal entity and `false` when not.
     */
    isCorporate: boolean;
    /**
     * Customer's last name.
     */
    lastName: string;
    /**
     * Customers's phone number.
     */
    phone: string;
    /**
     * If the customer is a legal entity, here goes the state inscription.
     */
    stateInscription: string;
    /**
     * If the customer is a legal entity, here goes the trade name.
     */
    tradeName: string;
    /**
     * Customer user profile ID.
     */
    userProfileId: string;
}
