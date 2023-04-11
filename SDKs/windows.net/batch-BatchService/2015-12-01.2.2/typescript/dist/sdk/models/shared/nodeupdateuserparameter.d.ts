import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for a ComputeNodeOperations.UpdateUser request.
 */
export declare class NodeUpdateUserParameter extends SpeakeasyBase {
    /**
     * Sets the time at which the account should expire. If omitted, the default is 1 day from the current time.
     */
    expiryTime?: Date;
    /**
     * Sets the password of the account.
     */
    password: string;
}
