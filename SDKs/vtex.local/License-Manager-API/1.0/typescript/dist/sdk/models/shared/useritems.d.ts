import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object representing users
 */
export declare class UserItems extends SpeakeasyBase {
    /**
     * Array of account names
     */
    accountNames?: string[];
    /**
     * Email of the user
     */
    email?: string;
    /**
     * ID of the user
     */
    id?: string;
    /**
     * If user is admin
     */
    isAdmin?: boolean;
    /**
     * If user is blocked
     */
    isBlocked?: boolean;
    /**
     * For internal use only
     */
    isReliable?: boolean;
    /**
     * Name of the user
     */
    name?: string;
    /**
     * Array of roles
     */
    roles?: string[];
}
