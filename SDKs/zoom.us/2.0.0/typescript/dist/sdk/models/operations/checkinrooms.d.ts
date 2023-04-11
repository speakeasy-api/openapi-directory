import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CheckInRoomsApplicationJSONParams extends SpeakeasyBase {
    /**
     * This field is only required if Google Calendar is being used for the event associated with the Zoom Room. The value for this field can be retrieved by calling Google's [CalendarList:list API](https://developers.google.com/calendar/v3/reference/events/list) and referring to the "id" field included in the [calendarList resource](https://developers.google.com/calendar/v3/reference/calendarList#resource).
     *
     * @remarks
     *
     *
     */
    calendarId?: string;
    /**
     * This field is required only for Microsoft Exchange or Office 365  calendar. The change key represents the specific version of the calendar item and can be retrieved by using Microsoft's [FindItem Operation](https://docs.microsoft.com/en-us/exchange/client-developer/web-service-reference/finditem-operation) and referring to the ChangeKey field of the ItemId Element included in the operation response.<br>
     */
    changeKey?: string;
    /**
     * Unique Identifier of the calendar event associated with the Zoom Room.<br><br>If the calendar integration being used is Microsoft Exchange, the value for this field can be retrieved by using Microsoft's [FindItem Operation](https://docs.microsoft.com/en-us/exchange/client-developer/web-service-reference/finditem-operation) and referring to the Id field of the ItemId Element included in the operation response.<br><br>If the Google calendar integration was used for this event, the event_id can be retrieved by calling Google's [Events:list API](https://developers.google.com/calendar/v3/reference/events/list) and referring to the "id" field included in the [events resource](https://developers.google.com/calendar/v3/reference/events#resource).
     *
     * @remarks
     *
     *
     */
    eventId: string;
    /**
     * This field is only required for Microsoft Exchange / Office 365 Calendar. It is the [resource mailbox](https://support.microsoft.com/en-us/help/10063/creating-and-managing-resource-mailboxes-in-office-365) associated with the calendar.
     */
    resourceEmail?: string;
}
export declare class CheckInRoomsApplicationJSON extends SpeakeasyBase {
    /**
     * The value of this field can be one of the following:<br>
     *
     * @remarks
     * * zoomroom.check_in
     * * zoomroom.check_out
     */
    method?: string;
    params?: CheckInRoomsApplicationJSONParams;
}
export declare class CheckInRoomsRequest extends SpeakeasyBase {
    requestBody?: CheckInRoomsApplicationJSON;
    /**
     * Room ID
     */
    id: string;
}
export declare class CheckInRoomsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `202` **Accepted**<br>
     *
     * @remarks
     * Request processed successfully.
     */
    checkInRooms202ApplicationJSONAny?: any;
}
