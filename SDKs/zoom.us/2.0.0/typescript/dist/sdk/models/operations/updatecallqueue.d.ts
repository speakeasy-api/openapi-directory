import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateCallQueueSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Status of the Call Queue. Allowed values:<br>
 *
 * @remarks
 * `active`<br>
 * `inactive`
 */
export declare enum UpdateCallQueueApplicationJSONStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class UpdateCallQueueApplicationJSON extends SpeakeasyBase {
    /**
     * Description for the Call Queue.
     */
    description?: string;
    /**
     * Phone extension number for the site.<br>
     *
     * @remarks
     *
     * If a site code has been [assigned](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites#h_79ca9c8f-c97b-4486-aa59-d0d9d31a525b) to the site, provide the short extension number instead of the original extension number.
     */
    extensionNumber?: number;
    /**
     * Name of the Call Queue.
     */
    name?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) where the Call Queue is assigned.
     */
    siteId?: string;
    /**
     * Status of the Call Queue. Allowed values:<br>
     *
     * @remarks
     * `active`<br>
     * `inactive`
     */
    status?: UpdateCallQueueApplicationJSONStatusEnum;
    /**
     * [Timezone](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones) of the Call Queue.
     */
    timezone?: string;
}
export declare class UpdateCallQueueRequest extends SpeakeasyBase {
    requestBody?: UpdateCallQueueApplicationJSON;
    /**
     * Unique Identifier of the Call Queue.
     */
    callQueueId: string;
}
export declare class UpdateCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Call Queue details updated successfully.
     */
    updateCallQueue204ApplicationJSONAny?: any;
}
