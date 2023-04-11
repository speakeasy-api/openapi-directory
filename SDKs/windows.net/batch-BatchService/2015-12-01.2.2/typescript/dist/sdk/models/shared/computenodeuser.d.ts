import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An user account on a compute node.
 */
export declare class ComputeNodeUser extends SpeakeasyBase {
    /**
     * Gets or sets the time at which the account should expire. If omitted, the default is 1 day from the current time.
     */
    expiryTime?: Date;
    /**
     * Gets or sets whether the account should be an administrator on the compute node.
     */
    isAdmin?: boolean;
    /**
     * Gets or sets the user name of the account.
     */
    name: string;
    /**
     * Gets or sets the password of the account.
     */
    password: string;
}
