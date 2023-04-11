import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateZRLocationProfileSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateZRLocationProfileApplicationJSONBasic extends SpeakeasyBase {
    /**
     * Address. Can only be updated for Campus and Building.
     */
    address?: string;
    /**
     * Description about the location.
     */
    description?: string;
    /**
     * Name of the location type.
     */
    name?: string;
    /**
     * Require code to exit out of your Zoom Rooms application to switch between other apps.
     *
     * @remarks
     *
     */
    requiredCodeToExt?: boolean;
    /**
     * 1-16 digit number or characters that is used to secure your Zoom Rooms application.
     */
    roomPasscode?: string;
    /**
     * The email address to be used for reporting Zoom Room issues.
     *
     * @remarks
     *
     */
    supportEmail?: string;
    /**
     * The phone number to be used for reporting Zoom Room issues.
     *
     * @remarks
     *
     */
    supportPhone?: string;
    /**
     * Timezone (can only be updated for location type - city).
     */
    timezone?: string;
}
export declare class UpdateZRLocationProfileApplicationJSON extends SpeakeasyBase {
    basic?: UpdateZRLocationProfileApplicationJSONBasic;
}
export declare class UpdateZRLocationProfileRequest extends SpeakeasyBase {
    requestBody?: UpdateZRLocationProfileApplicationJSON;
    /**
     * Unique Identifier of the location. This can be retrieved from the [List Zoom Room Locations](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms-location/listzrlocations) API.
     */
    locationId: string;
}
export declare class UpdateZRLocationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    updateZRLocationProfile200ApplicationJSONAny?: any;
}
