import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for a ComputeNodeOperations.UpdateUser request.
 */
export declare class NodeUpdateUserParameter extends SpeakeasyBase {
    /**
     * The time at which the account should expire. If omitted, the default is 1 day from the current time.
     */
    expiryTime?: Date;
    /**
     * The password of the account.
     */
    password?: string;
    /**
     * The SSH public key that can be used for remote login to the compute node.
     */
    sshPublicKey?: string;
}
