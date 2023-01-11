import { SpeakeasyBase } from "../../../internal/utils";
export declare class CheckInRoomsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CheckInRoomsApplicationJsonParams extends SpeakeasyBase {
    calendarId?: string;
    changeKey?: string;
    eventId: string;
    resourceEmail?: string;
}
export declare class CheckInRoomsApplicationJson extends SpeakeasyBase {
    method?: string;
    params?: CheckInRoomsApplicationJsonParams;
}
export declare class CheckInRoomsMultipartFormDataParams extends SpeakeasyBase {
    calendarId?: string;
    changeKey?: string;
    eventId: string;
    resourceEmail?: string;
}
export declare class CheckInRoomsMultipartFormData extends SpeakeasyBase {
    method?: string;
    params?: CheckInRoomsMultipartFormDataParams;
}
export declare class CheckInRoomsRequests extends SpeakeasyBase {
    object?: CheckInRoomsApplicationJson;
    object1?: CheckInRoomsMultipartFormData;
}
export declare class CheckInRoomsRequest extends SpeakeasyBase {
    pathParams: CheckInRoomsPathParams;
    request?: CheckInRoomsRequests;
}
export declare class CheckInRoomsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    checkInRooms202ApplicationJSONAny?: any;
}
