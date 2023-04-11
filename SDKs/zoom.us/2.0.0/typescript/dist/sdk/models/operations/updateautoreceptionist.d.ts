import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateAutoReceptionistSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateAutoReceptionistApplicationJSON extends SpeakeasyBase {
    /**
     * Extension number to be assigned to the auto receptionist. If site code is enabled, provide the short extension number instead.
     */
    extensionNumber?: number;
    /**
     * Display name of the auto receptionist.
     */
    name?: string;
}
export declare class UpdateAutoReceptionistRequest extends SpeakeasyBase {
    requestBody?: UpdateAutoReceptionistApplicationJSON;
    /**
     * Unique Identifier of the Auto Receptionist. It can be retrieved from the [List Sites API](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone-site/listphonesites).
     */
    autoReceptionistId: string;
}
export declare class UpdateAutoReceptionistResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br> **No Content**<br>
     *
     * @remarks
     * Auto Receptionist details updated sucessfully.
     */
    updateAutoReceptionist204ApplicationJSONAny?: any;
}
