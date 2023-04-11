import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserLevelChannelSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetUserLevelChannelRequest extends SpeakeasyBase {
    /**
     * Channel ID: Unique Identifier of a channel.
     */
    channelId: string;
}
/**
 * Type of the channel. The value can be one of the following:<br>
 *
 * @remarks
 * `1`: Private channel. In this type of channel, members must be invited to join a channel.<br>
 * `2`: Private channel with members that belong to one Zoom account. Members in this channel should be invited and the members should be from the same organization.<br>
 * `3`: Public channel. Anyone can search for this channel and join the channel.<br>
 */
export declare enum GetUserLevelChannel200ApplicationXMLTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * The channel object represents a Zoom chat [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-).
 */
export declare class GetUserLevelChannel200ApplicationXML extends SpeakeasyBase {
    /**
     * Channel Id.
     */
    id?: string;
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
     */
    type?: GetUserLevelChannel200ApplicationXMLTypeEnum;
}
/**
 * Type of the channel. The value can be one of the following:<br>
 *
 * @remarks
 * `1`: Private channel. In this type of channel, members must be invited to join a channel.<br>
 * `2`: Private channel with members that belong to one Zoom account. Members in this channel should be invited and the members should be from the same organization.<br>
 * `3`: Public channel. Anyone can search for this channel and join the channel.<br>
 */
export declare enum GetUserLevelChannel200ApplicationJSONTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * The channel object represents a Zoom chat [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-).
 */
export declare class GetUserLevelChannel200ApplicationJSON extends SpeakeasyBase {
    /**
     * Channel Id.
     */
    id?: string;
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
     */
    type?: GetUserLevelChannel200ApplicationJSONTypeEnum;
}
export declare class GetUserLevelChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Channel returned.<br>
     *
     *
     *
     *
     */
    getUserLevelChannel200ApplicationJSONObject?: GetUserLevelChannel200ApplicationJSON;
}
