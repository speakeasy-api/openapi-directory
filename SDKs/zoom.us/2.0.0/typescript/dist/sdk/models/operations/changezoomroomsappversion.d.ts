import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Specify one of the following values for this field:
 *
 * @remarks
 *
 * `upgrade`: Upgrade to the latest Zoom Rooms App Version.<br>
 * `downgrade`: Downgrade the Zoom Rooms App Version.<br>
 * `cancel`: Cancel an ongoing upgrade or downgrade process.
 */
export declare enum ChangeZoomRoomsAppVersionApplicationJSONActionEnum {
    Upgrade = "upgrade",
    Downgrade = "downgrade",
    Cancel = "cancel"
}
export declare class ChangeZoomRoomsAppVersionApplicationJSON extends SpeakeasyBase {
    /**
     * Specify one of the following values for this field:
     *
     * @remarks
     *
     * `upgrade`: Upgrade to the latest Zoom Rooms App Version.<br>
     * `downgrade`: Downgrade the Zoom Rooms App Version.<br>
     * `cancel`: Cancel an ongoing upgrade or downgrade process.
     */
    action?: ChangeZoomRoomsAppVersionApplicationJSONActionEnum;
}
export declare class ChangeZoomRoomsAppVersionRequest extends SpeakeasyBase {
    requestBody?: ChangeZoomRoomsAppVersionApplicationJSON;
    /**
     * Unique Identifier of the Mac or the Windows device. The value of this field can be retrieved from the [List Zoom Room Devices API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/listzrdevices).
     */
    deviceId: string;
    /**
     * Unique Identifier of the Zoom Room.
     */
    roomId: string;
}
export declare class ChangeZoomRoomsAppVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content** <br>
     *
     * @remarks
     * Request processed successfully.
     */
    changeZoomRoomsAppVersion204ApplicationJSONAny?: any;
}
