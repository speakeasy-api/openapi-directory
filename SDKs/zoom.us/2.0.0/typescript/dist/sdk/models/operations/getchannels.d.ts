import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChannelsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetChannelsRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * Unique identifier of the user.
     */
    userId: string;
}
export declare class GetChannels200ApplicationXMLChannelsChannelsSettings extends SpeakeasyBase {
    allowToAddExternalUsers?: number;
    newMembersCanSeePreviousMessagesFiles?: boolean;
    postingPermissions?: number;
}
export declare class GetChannels200ApplicationXMLChannels extends SpeakeasyBase {
    channelsSettings?: GetChannels200ApplicationXMLChannelsChannelsSettings;
    /**
     * Channel ID: Unique identifier of the Channel.
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
     * `1`: **Private channel.** In this type of channel, members must be invited to join a channel.<br>
     * `2`: **Private channel with users that belong to the same Zoom account**. Members in this channel should be invited and the members should be from the same organization.<br>
     * `3`: **Public channel.** Anyone can search for this channel and join the channel. External members cannot be invited.<br>
     * `4`: **New chat**. This is an instant channel which can be created by adding members to a new chat.<br>
     * `5`: **Public channel**, similar to above, except members can invite members of other accounts.
     */
    type?: number;
}
/**
 * **Status Code**: `200` <br>
 *
 * @remarks
 * User's channels returned.
 */
export declare class GetChannels200ApplicationXML extends SpeakeasyBase {
    /**
     * Chat Channel object(s).
     */
    channels?: GetChannels200ApplicationXMLChannels[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     *
     * @remarks
     * Default value: 30.
     */
    pageSize?: number;
    /**
     * The total number of records found.
     */
    totalRecords?: number;
}
export declare class GetChannels200ApplicationJSONChannelsChannelsSettings extends SpeakeasyBase {
    allowToAddExternalUsers?: number;
    newMembersCanSeePreviousMessagesFiles?: boolean;
    postingPermissions?: number;
}
export declare class GetChannels200ApplicationJSONChannels extends SpeakeasyBase {
    channelsSettings?: GetChannels200ApplicationJSONChannelsChannelsSettings;
    /**
     * Channel ID: Unique identifier of the Channel.
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
     * `1`: **Private channel.** In this type of channel, members must be invited to join a channel.<br>
     * `2`: **Private channel with users that belong to the same Zoom account**. Members in this channel should be invited and the members should be from the same organization.<br>
     * `3`: **Public channel.** Anyone can search for this channel and join the channel. External members cannot be invited.<br>
     * `4`: **New chat**. This is an instant channel which can be created by adding members to a new chat.<br>
     * `5`: **Public channel**, similar to above, except members can invite members of other accounts.
     */
    type?: number;
}
/**
 * **Status Code**: `200` <br>
 *
 * @remarks
 * User's channels returned.
 */
export declare class GetChannels200ApplicationJSON extends SpeakeasyBase {
    /**
     * Chat Channel object(s).
     */
    channels?: GetChannels200ApplicationJSONChannels[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     *
     * @remarks
     * Default value: 30.
     */
    pageSize?: number;
    /**
     * The total number of records found.
     */
    totalRecords?: number;
}
export declare class GetChannelsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Status Code**: `200` <br>
     *
     * @remarks
     * User's channels returned.
     */
    getChannels200ApplicationJSONObject?: GetChannels200ApplicationJSON;
}
