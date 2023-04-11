import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateADeviceSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateADeviceApplicationJSON extends SpeakeasyBase {
    /**
     * User ID or email address of the user to whom this device is to be assigned. The User ID and the email of the user can be retrieved using the [List Users](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/users) API.
     */
    assignedTo?: string;
    /**
     * Display name of the desk phone.
     */
    displayName?: string;
    /**
     * The MAC address of the desk phone.<br>
     *
     * @remarks
     * Note: If you're using a wireless phone, enter the wired MAC address, not the wireless MAC address.
     */
    macAddress?: string;
}
export declare class UpdateADeviceRequest extends SpeakeasyBase {
    requestBody?: UpdateADeviceApplicationJSON;
    /**
     * Unique Identifier of the Device.
     */
    deviceId: string;
}
export declare class UpdateADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Device updated successfully.
     */
    updateADevice204ApplicationJSONAny?: any;
}
