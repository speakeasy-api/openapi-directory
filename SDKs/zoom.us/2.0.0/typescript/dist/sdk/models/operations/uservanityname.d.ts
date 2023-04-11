import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserVanityNameRequest extends SpeakeasyBase {
    /**
     * Personal meeting room name.
     */
    vanityName: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Success.
 */
export declare class UserVanityName200ApplicationXML extends SpeakeasyBase {
    /**
     * If `true`, it indicates that the personal meeting room with the given name exists.<br> `false` - The room name does not exist.
     */
    existed?: boolean;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Success.
 */
export declare class UserVanityName200ApplicationJSON extends SpeakeasyBase {
    /**
     * If `true`, it indicates that the personal meeting room with the given name exists.<br> `false` - The room name does not exist.
     */
    existed?: boolean;
}
export declare class UserVanityNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Success.
     */
    userVanityName200ApplicationJSONObject?: UserVanityName200ApplicationJSON;
}
