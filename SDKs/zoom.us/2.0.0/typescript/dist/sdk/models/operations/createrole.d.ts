import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRoleApplicationJson extends SpeakeasyBase {
    description?: string;
    name?: string;
    privileges?: string[];
}
export declare class CreateRoleMultipartFormData extends SpeakeasyBase {
    description?: string;
    name?: string;
    privileges?: string[];
}
export declare class CreateRoleRequests extends SpeakeasyBase {
    object?: CreateRoleApplicationJson;
    object1?: CreateRoleMultipartFormData;
}
export declare class CreateRoleSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class CreateRole201ApplicationJson extends SpeakeasyBase {
    description?: string;
    id?: string;
    name?: string;
    privileges?: string[];
    totalMembers?: number;
}
export declare class CreateRoleRequest extends SpeakeasyBase {
    request?: CreateRoleRequests;
    security: CreateRoleSecurity;
}
export declare class CreateRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    createRole200ApplicationJSONAny?: any;
    createRole201ApplicationJSONObject?: CreateRole201ApplicationJson;
}
