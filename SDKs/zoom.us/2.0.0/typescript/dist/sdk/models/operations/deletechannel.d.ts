import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteChannelRequest extends SpeakeasyBase {
    /**
     * Channel ID: Unique Identifier of a channel.
     */
    channelId: string;
    userId: string;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
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
    deleteChannel204ApplicationJSONAny?: any;
}
