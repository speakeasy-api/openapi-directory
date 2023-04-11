import { SpeakeasyBase } from "../../../internal/utils";
import { Paging } from "./paging";
import { UserItems } from "./useritems";
/**
 * Response body for listing all users
 */
export declare class ListUsersResponse extends SpeakeasyBase {
    /**
     * Array of user objects
     */
    items?: UserItems[];
    /**
     * Paging object
     */
    paging?: Paging;
}
