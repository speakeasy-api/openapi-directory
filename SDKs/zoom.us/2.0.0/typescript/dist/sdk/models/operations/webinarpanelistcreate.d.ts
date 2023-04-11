import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarPanelistCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Panelist base object.
 */
export declare class WebinarPanelistCreateApplicationJSONPanelists extends SpeakeasyBase {
    /**
     * Panelist's email.
     */
    email?: string;
    /**
     * Panelist's full name.
     */
    name?: string;
}
/**
 * Webinar panelist.
 */
export declare class WebinarPanelistCreateApplicationJSON extends SpeakeasyBase {
    /**
     * List of panelist objects.
     */
    panelists?: WebinarPanelistCreateApplicationJSONPanelists[];
}
export declare class WebinarPanelistCreateRequest extends SpeakeasyBase {
    requestBody: WebinarPanelistCreateApplicationJSON;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Panelist created.
 */
export declare class WebinarPanelistCreate201ApplicationXML extends SpeakeasyBase {
    /**
     * Webinar Id.
     */
    id?: string;
    /**
     * The time at which the panelist was added.
     */
    updatedAt?: Date;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Panelist created.
 */
export declare class WebinarPanelistCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * Webinar Id.
     */
    id?: string;
    /**
     * The time at which the panelist was added.
     */
    updatedAt?: Date;
}
export declare class WebinarPanelistCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * Panelist created.
     */
    webinarPanelistCreate201ApplicationJSONObject?: WebinarPanelistCreate201ApplicationJSON;
}
