import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateRoleSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
 */
export declare class UpdateRoleApplicationJSONSubAccountPrivileges extends SpeakeasyBase {
    /**
     * Indicates how the account can manage sub accounts. The value can be one of the following:<br>
     *
     * @remarks
     * `1`: Manage the sub account as an owner of the account.<br>
     * `2`: Manage the sub account with the same privileges as the current account.<br>
     * `3`: Manage the sub account with specified privileges.
     */
    secondLevel?: number;
}
export declare class UpdateRoleApplicationJSON extends SpeakeasyBase {
    /**
     * Description of the role.
     */
    description?: string;
    /**
     * Role Id.
     */
    id?: string;
    /**
     * Name of the role.
     */
    name?: string;
    /**
     * Privileges assigned to the role. Can be one or a combination of [these permissions](https://marketplace.zoom.us/docs/api-reference/other-references/privileges).
     *
     * @remarks
     *
     */
    privileges?: string[];
    /**
     * This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
     */
    subAccountPrivileges?: UpdateRoleApplicationJSONSubAccountPrivileges;
    /**
     * Total members assigned to that role.
     */
    totalMembers?: number;
}
export declare class UpdateRoleRequest extends SpeakeasyBase {
    requestBody?: UpdateRoleApplicationJSON;
    /**
     * Role Id
     */
    roleId: string;
}
export declare class UpdateRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Error Code:** `200`<br>
     *
     * @remarks
     * The account must be a paid account to update the role.
     */
    updateRole200ApplicationJSONAny?: any;
}
