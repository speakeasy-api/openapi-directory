import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InviteChannelMembersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class InviteChannelMembersApplicationJSONMembers extends SpeakeasyBase {
    /**
     * Email adress of the member.
     */
    email: string;
}
export declare class InviteChannelMembersApplicationJSON extends SpeakeasyBase {
    /**
     * Members of a channel. You can invite up to a max number of 5 members with a single API call.
     */
    members?: InviteChannelMembersApplicationJSONMembers[];
}
export declare class InviteChannelMembersRequest extends SpeakeasyBase {
    requestBody?: InviteChannelMembersApplicationJSON;
    /**
     * Channel ID: Unique Identifier of the channel.
     */
    channelId: string;
    /**
     * Unique identifier of the user who is the owner of this channel.
     */
    userId: string;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Members invited to the channel.
 */
export declare class InviteChannelMembers201ApplicationXML extends SpeakeasyBase {
    /**
     * The date and time at which the member(s) are added to the channe.
     */
    addedAt?: Date;
    /**
     * Member Ids of the members.
     */
    ids?: string[];
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Members invited to the channel.
 */
export declare class InviteChannelMembers201ApplicationJSON extends SpeakeasyBase {
    /**
     * The date and time at which the member(s) are added to the channe.
     */
    addedAt?: Date;
    /**
     * Member Ids of the members.
     */
    ids?: string[];
}
export declare class InviteChannelMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * Members invited to the channel.
     */
    inviteChannelMembers201ApplicationJSONObject?: InviteChannelMembers201ApplicationJSON;
}
