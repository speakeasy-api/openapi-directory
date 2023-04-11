import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChangeZRLocationSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ChangeZRLocationApplicationJSON extends SpeakeasyBase {
    /**
     * Location ID of the location where Zoom Room is to be assigned. This can be retrieved from the `id` property in the response of [List Zoom Rooms Locations](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms-location/listzrlocations) API.
     */
    locationId?: string;
}
export declare class ChangeZRLocationRequest extends SpeakeasyBase {
    requestBody?: ChangeZRLocationApplicationJSON;
    /**
     * Unique Identifier of the Zoom Room.
     */
    roomId: string;
}
export declare class ChangeZRLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Location of the Zoom Room changed successfully.
     */
    changeZRLocation204ApplicationJSONAny?: any;
}
