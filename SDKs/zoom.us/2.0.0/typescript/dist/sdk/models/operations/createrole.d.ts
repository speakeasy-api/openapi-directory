import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateRoleSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class CreateRoleApplicationJSON extends SpeakeasyBase {
    /**
     * Description of the role.
     */
    description?: string;
    /**
     * Name of the role.
     */
    name?: string;
    /**
     * Privileges assigned to the role. Can be one or a combination of [these permissions](https://marketplace.zoom.us/docs/api-reference/other-references/privileges).
     */
    privileges?: string[];
}
/**
 * **Status Code:** `201`<br>
 *
 * @remarks
 * Role created.
 */
export declare class CreateRole201ApplicationJSON extends SpeakeasyBase {
    /**
     * Description of the role.
     */
    description?: string;
    /**
     * Role Id
     */
    id?: string;
    /**
     * Name of the role.
     */
    name?: string;
    /**
     * [Privileges](https://marketplace.zoom.us/docs/api-reference/other-references/privileges) provided to the role.
     */
    privileges?: string[];
    /**
     * Total members assigned to the role.
     */
    totalMembers?: number;
}
export declare class CreateRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Status Code:** `200`<br>
     *
     * @remarks
     * You do not have the permission to create a role.
     */
    createRole200ApplicationJSONAny?: any;
    /**
     * **Status Code:** `201`<br>
     *
     * @remarks
     * Role created.
     */
    createRole201ApplicationJSONObject?: CreateRole201ApplicationJSON;
}
