import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LeaveChannelSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class LeaveChannelRequest extends SpeakeasyBase {
    /**
     * Channel ID: Unique Identifier of a channel.
     */
    channelId: string;
}
export declare class LeaveChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * Left channel successfully.
     */
    leaveChannel204ApplicationJSONAny?: any;
}
