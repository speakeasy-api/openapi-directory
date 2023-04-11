import { SpeakeasyBase } from "../../../internal/utils";
import { Paging } from "./paging";
import { RoleItems } from "./roleitems";
/**
 * Response body for listing all roles
 */
export declare class ListRolesResponse extends SpeakeasyBase {
    /**
     * Array of role objects
     */
    items?: RoleItems[];
    /**
     * Paging object
     */
    paging?: Paging;
}
