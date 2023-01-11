import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RolesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * List of Roles
**/
export declare class RolesRoleList extends SpeakeasyBase {
    roles?: any[];
    totalRecords?: number;
}
export declare class RolesRequest extends SpeakeasyBase {
    security: RolesSecurity;
}
export declare class RolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    roleList?: RolesRoleList;
    statusCode: number;
}
