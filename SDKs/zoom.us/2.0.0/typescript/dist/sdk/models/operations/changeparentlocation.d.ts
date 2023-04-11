import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChangeParentLocationSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ChangeParentLocationApplicationJSON extends SpeakeasyBase {
    /**
     * Location ID of the new Parent Location under which you the child location will be positioned. This can be retrieved from the [List Zoom Room Locations](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms-location/listzrlocations) API.
     */
    parentLocationId?: string;
}
export declare class ChangeParentLocationRequest extends SpeakeasyBase {
    requestBody?: ChangeParentLocationApplicationJSON;
    locationId: string;
}
export declare class ChangeParentLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Location assigned successfully.
     */
    changeParentLocation204ApplicationJSONAny?: any;
}
