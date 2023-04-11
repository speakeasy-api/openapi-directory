import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateUserLevelChannelSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateUserLevelChannelApplicationJSON extends SpeakeasyBase {
    /**
     * A new name for the channel.
     */
    name: string;
}
export declare class UpdateUserLevelChannelRequest extends SpeakeasyBase {
    requestBody?: UpdateUserLevelChannelApplicationJSON;
    /**
     * Channel Id.
     */
    channelId: string;
}
export declare class UpdateUserLevelChannelResponse extends SpeakeasyBase {
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
    updateUserLevelChannel204ApplicationJSONAny?: any;
}
