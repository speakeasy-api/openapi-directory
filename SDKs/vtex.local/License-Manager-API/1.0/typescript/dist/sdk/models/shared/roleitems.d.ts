import { SpeakeasyBase } from "../../../internal/utils";
import { ProductItems } from "./productitems";
/**
 * Object representing roles
 */
export declare class RoleItems extends SpeakeasyBase {
    /**
     * ID of the role
     */
    id?: number;
    /**
     * If the role is admin
     */
    isAdmin?: boolean;
    logins?: string;
    /**
     * Name of the role
     */
    name?: string;
    /**
     * Array of product objects
     */
    products?: ProductItems[];
    resources?: string;
    /**
     * Returns 1 for custom roles, and 0 otherwise
     */
    roleType?: number;
}
