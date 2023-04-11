import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateChannelSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateChannelApplicationJSON extends SpeakeasyBase {
    /**
     * A new name for the channel.
     */
    name: string;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    requestBody?: UpdateChannelApplicationJSON;
    /**
     * Channel Id.
     */
    channelId: string;
    /**
     * Unique Identifier of the Zoom user who is the owner of the channel.
     */
    userId: string;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Status Code:** `204`
     *
     * @remarks
     * Channel updated.
     */
    updateChannel204ApplicationJSONAny?: any;
}
