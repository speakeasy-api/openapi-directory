import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserPermissionPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserPermission200ApplicationJson extends SpeakeasyBase {
    permissions?: string[];
}
export declare class UserPermissionRequest extends SpeakeasyBase {
    pathParams: UserPermissionPathParams;
}
export declare class UserPermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userPermission200ApplicationJSONObject?: UserPermission200ApplicationJson;
}
