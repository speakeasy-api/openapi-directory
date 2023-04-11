import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRoleSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeleteRoleRequest extends SpeakeasyBase {
    /**
     * Role Id.
     */
    roleId: string;
}
export declare class DeleteRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Status Code:** `204`<br>
     *
     * @remarks
     * Role deleted.
     */
    deleteRole204ApplicationJSONObject?: Record<string, any>;
}
