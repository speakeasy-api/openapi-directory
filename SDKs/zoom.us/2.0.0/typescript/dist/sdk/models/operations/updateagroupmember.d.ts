import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAGroupMemberPathParams extends SpeakeasyBase {
    groupId: string;
    memberId: string;
}
export declare enum UpdateAGroupMemberApplicationJsonActionEnum {
    Move = "move",
    SetPrimary = "set_primary"
}
export declare class UpdateAGroupMemberApplicationJson extends SpeakeasyBase {
    action: UpdateAGroupMemberApplicationJsonActionEnum;
    targetGroupId?: string;
}
export declare enum UpdateAGroupMemberMultipartFormDataActionEnum {
    Move = "move",
    SetPrimary = "set_primary"
}
export declare class UpdateAGroupMemberMultipartFormData extends SpeakeasyBase {
    action: UpdateAGroupMemberMultipartFormDataActionEnum;
    targetGroupId?: string;
}
export declare class UpdateAGroupMemberRequests extends SpeakeasyBase {
    object?: UpdateAGroupMemberApplicationJson;
    object1?: UpdateAGroupMemberMultipartFormData;
}
export declare class UpdateAGroupMemberSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateAGroupMemberRequest extends SpeakeasyBase {
    pathParams: UpdateAGroupMemberPathParams;
    request?: UpdateAGroupMemberRequests;
    security: UpdateAGroupMemberSecurity;
}
export declare class UpdateAGroupMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateAGroupMember204ApplicationJSONAny?: any;
}
