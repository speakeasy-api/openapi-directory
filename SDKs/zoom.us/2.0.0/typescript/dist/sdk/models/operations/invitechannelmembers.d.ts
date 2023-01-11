import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InviteChannelMembersPathParams extends SpeakeasyBase {
    channelId: string;
    userId: string;
}
export declare class InviteChannelMembersApplicationJsonMembers extends SpeakeasyBase {
    email: string;
}
export declare class InviteChannelMembersApplicationJson extends SpeakeasyBase {
    members?: InviteChannelMembersApplicationJsonMembers[];
}
export declare class InviteChannelMembersMultipartFormDataMembers extends SpeakeasyBase {
    email: string;
}
export declare class InviteChannelMembersMultipartFormData1 extends SpeakeasyBase {
    members?: InviteChannelMembersMultipartFormDataMembers[];
}
export declare class InviteChannelMembersRequests extends SpeakeasyBase {
    object?: InviteChannelMembersApplicationJson;
    object1?: InviteChannelMembersMultipartFormData1;
}
export declare class InviteChannelMembersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class InviteChannelMembers201ApplicationJson extends SpeakeasyBase {
    addedAt?: Date;
    ids?: string[];
}
export declare class InviteChannelMembersRequest extends SpeakeasyBase {
    pathParams: InviteChannelMembersPathParams;
    request?: InviteChannelMembersRequests;
    security: InviteChannelMembersSecurity;
}
export declare class InviteChannelMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    inviteChannelMembers201ApplicationJSONObject?: InviteChannelMembers201ApplicationJson;
}
