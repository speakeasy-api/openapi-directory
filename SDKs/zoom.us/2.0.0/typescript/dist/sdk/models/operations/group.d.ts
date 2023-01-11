import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GroupSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class Group200ApplicationJson extends SpeakeasyBase {
    id?: string;
    name?: string;
    totalMembers?: number;
}
export declare class GroupRequest extends SpeakeasyBase {
    pathParams: GroupPathParams;
    security: GroupSecurity;
}
export declare class GroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    group200ApplicationJSONObject?: Group200ApplicationJson;
}
