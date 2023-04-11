import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRoleInformationSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetRoleInformationRequest extends SpeakeasyBase {
    /**
     * Role Id.
     */
    roleId: string;
}
/**
 * This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
 */
export declare class GetRoleInformation200ApplicationXMLSubAccountPrivileges extends SpeakeasyBase {
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
/**
 * **Status Code:** `200`<br>
 *
 * @remarks
 * Information about a specific role returned.
 *
 * **Error Code:** `200`<br>
 * You do not have the permission to retrieve role information.
 *
 */
export declare class GetRoleInformation200ApplicationXML extends SpeakeasyBase {
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
     * This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
     */
    subAccountPrivileges?: GetRoleInformation200ApplicationXMLSubAccountPrivileges;
    /**
     * Total members assigned to that role.
     */
    totalMembers?: number;
}
/**
 * This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
 */
export declare class GetRoleInformation200ApplicationJSONSubAccountPrivileges extends SpeakeasyBase {
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
/**
 * **Status Code:** `200`<br>
 *
 * @remarks
 * Information about a specific role returned.
 *
 * **Error Code:** `200`<br>
 * You do not have the permission to retrieve role information.
 *
 */
export declare class GetRoleInformation200ApplicationJSON extends SpeakeasyBase {
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
     * This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
     */
    subAccountPrivileges?: GetRoleInformation200ApplicationJSONSubAccountPrivileges;
    /**
     * Total members assigned to that role.
     */
    totalMembers?: number;
}
export declare class GetRoleInformationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Status Code:** `200`<br>
     *
     * @remarks
     * Information about a specific role returned.
     *
     * **Error Code:** `200`<br>
     * You do not have the permission to retrieve role information.
     *
     */
    getRoleInformation200ApplicationJSONObject?: GetRoleInformation200ApplicationJSON;
}
