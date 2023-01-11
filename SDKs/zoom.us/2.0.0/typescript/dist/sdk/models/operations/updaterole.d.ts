import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRolePathParams extends SpeakeasyBase {
    roleId: string;
}
/**
 * This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
**/
export declare class UpdateRoleApplicationJsonSubAccountPrivileges extends SpeakeasyBase {
    secondLevel?: number;
}
export declare class UpdateRoleApplicationJson extends SpeakeasyBase {
    description?: string;
    id?: string;
    name?: string;
    privileges?: string[];
    subAccountPrivileges?: UpdateRoleApplicationJsonSubAccountPrivileges;
    totalMembers?: number;
}
/**
 * This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
**/
export declare class UpdateRoleMultipartFormDataSubAccountPrivileges extends SpeakeasyBase {
    secondLevel?: number;
}
export declare class UpdateRoleMultipartFormData extends SpeakeasyBase {
    description?: string;
    id?: string;
    name?: string;
    privileges?: string[];
    subAccountPrivileges?: UpdateRoleMultipartFormDataSubAccountPrivileges;
    totalMembers?: number;
}
export declare class UpdateRoleRequests extends SpeakeasyBase {
    object?: UpdateRoleApplicationJson;
    object1?: UpdateRoleMultipartFormData;
}
export declare class UpdateRoleSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateRoleRequest extends SpeakeasyBase {
    pathParams: UpdateRolePathParams;
    request?: UpdateRoleRequests;
    security: UpdateRoleSecurity;
}
export declare class UpdateRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateRole200ApplicationJSONAny?: any;
}
