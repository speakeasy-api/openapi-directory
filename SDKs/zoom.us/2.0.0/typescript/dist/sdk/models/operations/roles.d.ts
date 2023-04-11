import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RolesRoleListRoles extends SpeakeasyBase {
    /**
     * Role Description
     */
    description?: string;
    /**
     * Role Id
     */
    id?: string;
    /**
     * Role Name
     */
    name?: string;
    /**
     * Total members in this role
     */
    totalMembers?: number;
}
/**
 * List of Roles
 */
export declare class RolesRoleList extends SpeakeasyBase {
    /**
     * List of Roles objects
     */
    roles?: RolesRoleListRoles[];
    /**
     * The number of all records available across pages
     */
    totalRecords?: number;
}
export declare class RolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of roles returned.
     */
    roleList?: RolesRoleList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
