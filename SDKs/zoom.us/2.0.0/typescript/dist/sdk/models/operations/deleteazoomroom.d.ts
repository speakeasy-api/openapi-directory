import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAZoomRoomSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeleteAZoomRoomRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of a Zoom Room.
     */
    roomId: string;
}
export declare class DeleteAZoomRoomResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content** <br>
     *
     * @remarks
     * Zoom Room deleted successfully.
     *
     */
    deleteAZoomRoom204ApplicationJSONObject?: Record<string, any>;
}
