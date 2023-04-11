import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserPermissionRequest extends SpeakeasyBase {
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * User permissions returned.
 */
export declare class UserPermission200ApplicationXML extends SpeakeasyBase {
    /**
     * List of user permissions.
     */
    permissions?: string[];
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * User permissions returned.
 */
export declare class UserPermission200ApplicationJSON extends SpeakeasyBase {
    /**
     * List of user permissions.
     */
    permissions?: string[];
}
export declare class UserPermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * User permissions returned.
     */
    userPermission200ApplicationJSONObject?: UserPermission200ApplicationJSON;
}
