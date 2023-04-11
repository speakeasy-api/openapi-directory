import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class JoinChannelSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class JoinChannelRequest extends SpeakeasyBase {
    /**
     * Channel Id.
     */
    channelId: string;
}
/**
 * **HTTP Status Code:** `201`
 *
 * @remarks
 * Successfully joined the channel.
 */
export declare class JoinChannel201ApplicationXML extends SpeakeasyBase {
    /**
     * The date and time at which a user joined the channel.
     */
    addedAt?: Date;
    /**
     * Member Id of the user who joined the public channel.
     */
    id?: string;
}
/**
 * **HTTP Status Code:** `201`
 *
 * @remarks
 * Successfully joined the channel.
 */
export declare class JoinChannel201ApplicationJSON extends SpeakeasyBase {
    /**
     * The date and time at which a user joined the channel.
     */
    addedAt?: Date;
    /**
     * Member Id of the user who joined the public channel.
     */
    id?: string;
}
export declare class JoinChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`
     *
     * @remarks
     * Successfully joined the channel.
     */
    joinChannel201ApplicationJSONObject?: JoinChannel201ApplicationJSON;
}
