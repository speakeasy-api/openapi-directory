import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupMembersDeletePathParams extends SpeakeasyBase {
    groupId: string;
    memberId: string;
}
export declare class GroupMembersDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GroupMembersDeleteRequest extends SpeakeasyBase {
    pathParams: GroupMembersDeletePathParams;
    security: GroupMembersDeleteSecurity;
}
export declare class GroupMembersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
