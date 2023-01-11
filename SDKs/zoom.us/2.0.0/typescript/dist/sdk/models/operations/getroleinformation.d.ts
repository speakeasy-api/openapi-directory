import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRoleInformationPathParams extends SpeakeasyBase {
    roleId: string;
}
export declare class GetRoleInformationSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
**/
export declare class GetRoleInformation200ApplicationJsonSubAccountPrivileges extends SpeakeasyBase {
    secondLevel?: number;
}
export declare class GetRoleInformation200ApplicationJson extends SpeakeasyBase {
    description?: string;
    id?: string;
    name?: string;
    privileges?: string[];
    subAccountPrivileges?: GetRoleInformation200ApplicationJsonSubAccountPrivileges;
    totalMembers?: number;
}
export declare class GetRoleInformationRequest extends SpeakeasyBase {
    pathParams: GetRoleInformationPathParams;
    security: GetRoleInformationSecurity;
}
export declare class GetRoleInformationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getRoleInformation200ApplicationJSONObject?: GetRoleInformation200ApplicationJson;
}
