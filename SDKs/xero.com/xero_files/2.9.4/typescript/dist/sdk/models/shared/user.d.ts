import { SpeakeasyBase } from "../../../internal/utils";
export declare class User extends SpeakeasyBase {
    /**
     * First name of user
     */
    firstName?: string;
    /**
     * Last name of user
     */
    fullName?: string;
    /**
     * Xero identifier
     */
    id: string;
    /**
     * Last name of user
     */
    lastName?: string;
    /**
     * Key is Name, but returns Email address of user who created the file
     */
    name?: string;
}
