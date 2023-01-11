import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupDeletePathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GroupDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GroupDeleteRequest extends SpeakeasyBase {
    pathParams: GroupDeletePathParams;
    security: GroupDeleteSecurity;
}
export declare class GroupDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
