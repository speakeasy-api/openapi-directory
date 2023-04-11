import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Presence status of the user. The value can be set to one of the following:<br>
 *
 * @remarks
 * * `Away`
 * * `Do_Not_Disturb`
 * * `Available`
 *
 * Users who are on Zoom Client with a version **lower than 5.3.0** can update the status from:
 * * `Away` to `Do_Not_Disturb`
 * * `Available` to `Do-Not_Disturb`
 *
 * Users who are on **Zoom Client 5.3.0** or higher can update the status from:
 * * `Do_Not_Disturb` to `Away`
 * * `Do_Not_Disturb` to `Available`
 * * `Available` to `Away`
 * * `Away` to `Available`
 */
export declare enum UpdatePresenceStatusApplicationJSONStatusEnum {
    DoNoDisturb = "Do_No_Disturb",
    Away = "Away",
    Available = "Available"
}
export declare class UpdatePresenceStatusApplicationJSON extends SpeakeasyBase {
    /**
     * If you're updating the status to `Do_Not_Disturb`, specify a duration in minutes for which the status should remain as `Do_Not_Disturb`.
     *
     * @remarks
     *
     * The default value is 20 minutes and the maximum allowed value is 1440 minutes.
     */
    duration?: number;
    /**
     * Presence status of the user. The value can be set to one of the following:<br>
     *
     * @remarks
     * * `Away`
     * * `Do_Not_Disturb`
     * * `Available`
     *
     * Users who are on Zoom Client with a version **lower than 5.3.0** can update the status from:
     * * `Away` to `Do_Not_Disturb`
     * * `Available` to `Do-Not_Disturb`
     *
     * Users who are on **Zoom Client 5.3.0** or higher can update the status from:
     * * `Do_Not_Disturb` to `Away`
     * * `Do_Not_Disturb` to `Available`
     * * `Available` to `Away`
     * * `Away` to `Available`
     */
    status?: UpdatePresenceStatusApplicationJSONStatusEnum;
}
export declare class UpdatePresenceStatusRequest extends SpeakeasyBase {
    requestBody?: UpdatePresenceStatusApplicationJSON;
    userId: string;
}
export declare class UpdatePresenceStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     *
     * Status updated succesfully.
     *
     */
    updatePresenceStatus204ApplicationJSONAny?: any;
}
