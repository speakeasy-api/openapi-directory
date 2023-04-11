import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateCommonAreaPhoneSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateCommonAreaPhoneApplicationJSON extends SpeakeasyBase {
    /**
     * Display name of the common area phone.
     */
    displayName?: string;
    /**
     * Extension number of the phone. If site code is enabled, provide short extension number instead.
     */
    extensionNumber?: number;
    /**
     *  Mac address or serial number of the device. Examples of supported format: "64-16-7f-37-90-92" or "64167f379092".
     */
    macAddress?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) to which the common area desk phone is assigned.
     */
    siteId?: string;
}
export declare class UpdateCommonAreaPhoneRequest extends SpeakeasyBase {
    requestBody?: UpdateCommonAreaPhoneApplicationJSON;
    commonAreaPhoneId: string;
}
export declare class UpdateCommonAreaPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Common Area Phone information updated successfully.
     */
    updateCommonAreaPhone204ApplicationJSONAny?: any;
}
