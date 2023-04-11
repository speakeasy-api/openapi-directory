import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserLevelChannelRequest extends SpeakeasyBase {
    /**
     * Channel ID: Unique Identifier of a channel.
     */
    channelId: string;
}
export declare class DeleteUserLevelChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * Channel deleted.
     */
    deleteUserLevelChannel204ApplicationJSONAny?: any;
}
