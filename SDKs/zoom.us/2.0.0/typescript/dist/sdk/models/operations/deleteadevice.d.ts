import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteADeviceSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeleteADeviceRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the device.
     */
    deviceId: string;
}
export declare class DeleteADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Device deleted successfully.
     */
    deleteADevice204ApplicationJSONAny?: any;
}
