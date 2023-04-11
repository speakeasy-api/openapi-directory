import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * To remove the emergency content from the Zoom Rooms digital signage display, set the value of this field to be `zoomroom.emergency_alert_removed`.
 */
export declare enum ManageE911signageApplicationJson2MethodEnum {
    ZoomroomEmergencyAlertRemoved = "zoomroom.emergency_alert_removed"
}
/**
 * Provide one of the following values for this field that is associated to the value you entered in the `target_ids` field. <br>
 *
 * @remarks
 * * `account`
 * * `location`
 * * `room`
 */
export declare enum ManageE911signageApplicationJson2ParamsTargetTypeEnum {
    Account = "account",
    Location = "location",
    Room = "room"
}
export declare class ManageE911signageApplicationJson2Params extends SpeakeasyBase {
    /**
     * Unique identifier of the event.
     */
    eventId?: string;
    /**
     * Provide one of the following IDs associated with the Zoom Room.<br>
     *
     * @remarks
     *
     * * `accountId`: Account ID of the Zoom account.<br> Provide account ID as the value of this field to remove the alert content from all Zoom Rooms' displays in the account.<br><br>
     * * `locationId`: Location ID. Get the value of this field by calling [List Zoom Rooms Locations API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms-location/listzrlocations).<br>Provide location ID as the value of this field to remove the alert content from all Zoom Rooms' displays listed in the specified location.<br><br>
     * * `roomId`: Unique identifier of the Zoom Room. Get the value of this field by calling [List Zoom Rooms API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/listzoomrooms). Provide room ID as the value of this field to remove the alert content from a specific Zoom Rooms' display.
     */
    targetIds?: string[];
    /**
     * Provide one of the following values for this field that is associated to the value you entered in the `target_ids` field. <br>
     *
     * @remarks
     * * `account`
     * * `location`
     * * `room`
     */
    targetType?: ManageE911signageApplicationJson2ParamsTargetTypeEnum;
}
/**
 * Provide this request body to remove the emergency alert content. Note that there won't be a response body for this request.
 */
export declare class ManageE911signageApplicationJson2 extends SpeakeasyBase {
    /**
     * To remove the emergency content from the Zoom Rooms digital signage display, set the value of this field to be `zoomroom.emergency_alert_removed`.
     */
    method?: ManageE911signageApplicationJson2MethodEnum;
    params?: ManageE911signageApplicationJson2Params;
}
/**
 * To display the emergency content on the Zoom Rooms digital signage display, set the value of this field to be `zoomroom.emergency_alert_displayed`.
 */
export declare enum ManageE911signageApplicationJson1MethodEnum {
    ZoomroomEmergencyAlertDisplayed = "zoomroom.emergency_alert_displayed"
}
/**
 * Provide one of the following values for this field that is associated to the value you entered in the `target_ids` field. <br>
 *
 * @remarks
 * * `account`
 * * `location`
 * * `room`
 */
export declare enum ManageE911signageApplicationJson1ParamsTargetTypeEnum {
    Account = "account",
    Location = "location",
    Room = "room"
}
export declare class ManageE911signageApplicationJson1Params extends SpeakeasyBase {
    /**
     * Provide the content to be displayed.
     */
    content?: string;
    /**
     * Provide one of the following IDs associated with the Zoom Room.<br>
     *
     * @remarks
     *
     * * `accountId`: Account ID of the Zoom account.<br> Provide account ID as the value of this field to display the alert content on all Zoom Rooms' displays in the account.<br><br>
     * * `locationId`: Location ID. Get the value of this field by calling [List Zoom Rooms Locations API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms-location/listzrlocations).<br>Provide location ID as the value of this field to display the alert content on all Zoom Rooms' displays listed in the specified location.<br><br>
     * * `roomId`: Unique identifier of the Zoom Room. Get the value of this field by calling [List Zoom Rooms API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/listzoomrooms). Provide room ID as the value of this field to display the alert content on a specific Zoom Rooms' display.
     */
    targetIds?: string[];
    /**
     * Provide one of the following values for this field that is associated to the value you entered in the `target_ids` field. <br>
     *
     * @remarks
     * * `account`
     * * `location`
     * * `room`
     */
    targetType?: ManageE911signageApplicationJson1ParamsTargetTypeEnum;
}
/**
 * Provide this request body to set and display the emergency alert content.
 */
export declare class ManageE911signageApplicationJson1 extends SpeakeasyBase {
    /**
     * To display the emergency content on the Zoom Rooms digital signage display, set the value of this field to be `zoomroom.emergency_alert_displayed`.
     */
    method?: ManageE911signageApplicationJson1MethodEnum;
    params?: ManageE911signageApplicationJson1Params;
}
/**
 * **HTTP Status Code:** `202` <br>
 */
export declare class ManageE911signage202ApplicationXML extends SpeakeasyBase {
    /**
     * Unique identifier of the event related to the content being displayed. This field is only returned if you provided `zoomroom.emergency_alert_displayed` as the value of the `method` parameter.
     *
     * @remarks
     *
     * Save this response value and provide it as the value of the `event_id` request parameter when you need to remove the alert content using `zoomroom.emergency_alert_removed` method.
     */
    eventId?: string;
}
/**
 * **HTTP Status Code:** `202` <br>
 */
export declare class ManageE911signage202ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique identifier of the event related to the content being displayed. This field is only returned if you provided `zoomroom.emergency_alert_displayed` as the value of the `method` parameter.
     *
     * @remarks
     *
     * Save this response value and provide it as the value of the `event_id` request parameter when you need to remove the alert content using `zoomroom.emergency_alert_removed` method.
     */
    eventId?: string;
}
export declare class ManageE911signageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `202` <br>
     */
    manageE911signage202ApplicationJSONObject?: ManageE911signage202ApplicationJSON;
}
