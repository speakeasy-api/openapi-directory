import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddCommonAreaPhoneSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class AddCommonAreaPhoneRequestBody extends SpeakeasyBase {
    /**
     * Description for the common area phone.
     */
    description?: string;
    /**
     * Display name of the Common area phone.
     */
    displayName: string;
    /**
     * Extension number assigned to the common area phone. If site code is enabled, provide the short extension number instead.
     */
    extensionNumber: number;
    /**
     * Mac Address (serial number) of the common area desk phone. These examples show the formats supported: `64-16-7f-37-90-92` or `64167f379092`
     */
    macAddress: string;
    /**
     * Device Model name. Refer to the "Model Name" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/zoomphone-supporteddevice) table.
     */
    model?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672). This can be retrieved from the [List Phone Sites](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone-site/listphonesites) API.
     */
    siteId?: string;
    /**
     * [Timezone ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists) for the common area phone.
     */
    timeZone?: string;
    /**
     * Phone device manufacturer name. Refer to the "Manufacturer Name" field in [this](https://marketplace.zoom.us/docs/api-reference/other-references/zoomphone-supporteddevice) table.
     */
    type: string;
}
/**
 * **HTTP Status Code:** `201` **Created**<br>
 *
 * @remarks
 *
 * Common area phone added successfully.
 */
export declare class AddCommonAreaPhone201ApplicationXML extends SpeakeasyBase {
    /**
     * Display name of the common area phone.
     */
    displayName?: string;
    /**
     * Unique Identifier of the common area phone.
     */
    id?: string;
}
/**
 * **HTTP Status Code:** `201` **Created**<br>
 *
 * @remarks
 *
 * Common area phone added successfully.
 */
export declare class AddCommonAreaPhone201ApplicationJSON extends SpeakeasyBase {
    /**
     * Display name of the common area phone.
     */
    displayName?: string;
    /**
     * Unique Identifier of the common area phone.
     */
    id?: string;
}
export declare class AddCommonAreaPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created**<br>
     *
     * @remarks
     *
     * Common area phone added successfully.
     */
    addCommonAreaPhone201ApplicationJSONObject?: AddCommonAreaPhone201ApplicationJSON;
}
