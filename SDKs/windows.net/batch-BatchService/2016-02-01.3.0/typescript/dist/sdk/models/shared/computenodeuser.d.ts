import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An user account on a compute node.
 */
export declare class ComputeNodeUser extends SpeakeasyBase {
    /**
     * The time at which the account should expire. If omitted, the default is 1 day from the current time.
     */
    expiryTime?: Date;
    /**
     * Whether the account should be an administrator on the compute node.
     */
    isAdmin?: boolean;
    /**
     * The user name of the account.
     */
    name: string;
    /**
     * The password of the account.
     */
    password?: string;
    /**
     * The SSH public key that can be used for remote login to the compute node.
     */
    sshPublicKey?: string;
}
