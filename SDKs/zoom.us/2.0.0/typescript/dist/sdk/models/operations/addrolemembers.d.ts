import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddRoleMembersPathParams extends SpeakeasyBase {
    roleId: string;
}
export declare class AddRoleMembersApplicationJsonMembers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class AddRoleMembersApplicationJson extends SpeakeasyBase {
    members?: AddRoleMembersApplicationJsonMembers[];
}
export declare class AddRoleMembersMultipartFormDataMembers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class AddRoleMembersMultipartFormData1 extends SpeakeasyBase {
    members?: AddRoleMembersMultipartFormDataMembers[];
}
export declare class AddRoleMembersRequests extends SpeakeasyBase {
    object?: AddRoleMembersApplicationJson;
    object1?: AddRoleMembersMultipartFormData1;
}
export declare class AddRoleMembersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AddRoleMembers201ApplicationJson extends SpeakeasyBase {
    addAt?: Date;
    ids?: string;
}
export declare class AddRoleMembersRequest extends SpeakeasyBase {
    pathParams: AddRoleMembersPathParams;
    request: AddRoleMembersRequests;
    security: AddRoleMembersSecurity;
}
export declare class AddRoleMembersResponse extends SpeakeasyBase {
    addRoleMembers201ApplicationJSONObject?: AddRoleMembers201ApplicationJson;
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
