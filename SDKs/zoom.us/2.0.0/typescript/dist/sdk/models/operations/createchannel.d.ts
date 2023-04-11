import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateChannelSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class CreateChannelApplicationJSONMembers extends SpeakeasyBase {
    /**
     * Member's email address.
     */
    email: string;
}
/**
 * Type of the channel. The value can be one of the following:<br>
 *
 * @remarks
 * `1`: Private channel. In this type of channel, members must be invited to join a channel.<br>
 * `2`: Private channel with members that belong to one Zoom account. Members in this channel should be invited and the members should be from the same organization.<br>
 * `3`: Public channel. Anyone can search for this channel and join the channel.<br>
 * `4`: New chat. This is an instant channel which can be created by adding members to a new chat.
 */
export declare enum CreateChannelApplicationJSONTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class CreateChannelApplicationJSON extends SpeakeasyBase {
    /**
     * Member(s) to include in the channel. A max of 5 members can be added to the channel at once with this API.
     */
    members?: CreateChannelApplicationJSONMembers[];
    /**
     * Name of the channel.
     */
    name?: string;
    /**
     * Type of the channel. The value can be one of the following:<br>
     *
     * @remarks
     * `1`: Private channel. In this type of channel, members must be invited to join a channel.<br>
     * `2`: Private channel with members that belong to one Zoom account. Members in this channel should be invited and the members should be from the same organization.<br>
     * `3`: Public channel. Anyone can search for this channel and join the channel.<br>
     * `4`: New chat. This is an instant channel which can be created by adding members to a new chat.
     */
    type?: CreateChannelApplicationJSONTypeEnum;
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    requestBody?: CreateChannelApplicationJSON;
    /**
     * Unique identifier of the user.
     */
    userId: string;
}
/**
 * **Status Code**: `201` <br>
 *
 * @remarks
 * Channel created.
 */
export declare class CreateChannel201ApplicationXML extends SpeakeasyBase {
    /**
     * Channel ID: Unique Identifier of the Channel.
     */
    id?: string;
    /**
     * Channel JID.
     */
    jid?: string;
    /**
     * Channel name.
     */
    name?: string;
    /**
     * Channel type.
     */
    type?: number;
}
/**
 * **Status Code**: `201` <br>
 *
 * @remarks
 * Channel created.
 */
export declare class CreateChannel201ApplicationJSON extends SpeakeasyBase {
    /**
     * Channel ID: Unique Identifier of the Channel.
     */
    id?: string;
    /**
     * Channel JID.
     */
    jid?: string;
    /**
     * Channel name.
     */
    name?: string;
    /**
     * Channel type.
     */
    type?: number;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Status Code**: `201` <br>
     *
     * @remarks
     * Channel created.
     */
    createChannel201ApplicationJSONObject?: CreateChannel201ApplicationJSON;
}
