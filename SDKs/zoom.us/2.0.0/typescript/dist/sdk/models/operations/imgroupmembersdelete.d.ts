import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImGroupMembersDeletePathParams extends SpeakeasyBase {
    groupId: string;
    memberId: string;
}
export declare class ImGroupMembersDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ImGroupMembersDeleteRequest extends SpeakeasyBase {
    pathParams: ImGroupMembersDeletePathParams;
    security: ImGroupMembersDeleteSecurity;
}
export declare class ImGroupMembersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
