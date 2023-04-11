import { SpeakeasyBase } from "../../../internal/utils";
export declare class Profile extends SpeakeasyBase {
    /**
     * Client's birth date in ISO 8601 format.
     */
    birthDate?: string;
    /**
     * Client's document.
     */
    document: string;
    /**
     * Type of document informed in `document`.
     */
    documentType: string;
    /**
     * Client's email address.
     */
    email: string;
    /**
     * Client's first name.
     */
    firstName: string;
    /**
     * Client's last name.
     */
    lastName: string;
}
