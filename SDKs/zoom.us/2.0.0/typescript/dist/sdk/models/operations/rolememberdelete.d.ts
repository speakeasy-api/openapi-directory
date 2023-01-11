import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RoleMemberDeletePathParams extends SpeakeasyBase {
    memberId: string;
    roleId: string;
}
export declare class RoleMemberDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class RoleMemberDeleteRequest extends SpeakeasyBase {
    pathParams: RoleMemberDeletePathParams;
    security: RoleMemberDeleteSecurity;
}
export declare class RoleMemberDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
