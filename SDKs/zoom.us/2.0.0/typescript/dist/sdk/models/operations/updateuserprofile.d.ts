import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateUserProfileSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateUserProfileApplicationJSON extends SpeakeasyBase {
    /**
     * The extension number of the user. The number must be complete (i.e. site number + short extension).
     */
    extensionNumber?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672) where the user should be moved or assigned.
     */
    siteId?: string;
}
export declare class UpdateUserProfileRequest extends SpeakeasyBase {
    requestBody?: UpdateUserProfileApplicationJSON;
    userId: string;
}
export declare class UpdateUserProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * Profile updated.
     */
    updateUserProfile204ApplicationJSONAny?: any;
}
