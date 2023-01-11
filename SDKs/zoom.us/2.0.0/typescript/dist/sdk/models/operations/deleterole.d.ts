import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRolePathParams extends SpeakeasyBase {
    roleId: string;
}
export declare class DeleteRoleSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeleteRoleRequest extends SpeakeasyBase {
    pathParams: DeleteRolePathParams;
    security: DeleteRoleSecurity;
}
export declare class DeleteRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteRole204ApplicationJSONObject?: Record<string, any>;
}
