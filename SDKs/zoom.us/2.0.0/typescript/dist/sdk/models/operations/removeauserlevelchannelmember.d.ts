import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveAUserLevelChannelMemberSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class RemoveAUserLevelChannelMemberRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Channel from where you would like to remove a member. This can be retrieved from the [List Channels API](https://marketplace.zoom.us/docs/api-reference/zoom-api/chat-channels/getchannels).
     */
    channelId: string;
    /**
     * Email address of the member whom you would like to be remove from the channel.
     */
    memberId: string;
}
export declare class RemoveAUserLevelChannelMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Member removed.
     *
     *
     *
     */
    removeAUserLevelChannelMember204ApplicationJSONAny?: any;
}
