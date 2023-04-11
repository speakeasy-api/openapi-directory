import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardWebinarParticipantsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Provide 'registrant_id' as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [webinar registrant](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarregistrants).<br>
 *
 * @remarks
 *
 *
 */
export declare enum DashboardWebinarParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}
/**
 * The webinar type.
 */
export declare enum DashboardWebinarParticipantsTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarParticipantsRequest extends SpeakeasyBase {
    /**
     * Provide 'registrant_id' as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [webinar registrant](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarregistrants).<br>
     *
     * @remarks
     *
     *
     */
    includeFields?: DashboardWebinarParticipantsIncludeFieldsEnum;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The webinar type.
     */
    type?: DashboardWebinarParticipantsTypeEnum;
    /**
     * The webinar ID or the webinar UUID.  If a webinar ID is provided in the request instead of a UUID, the response will be for the latest webinar instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    webinarId: string;
}
/**
 * Audio quality of the participant.
 */
export declare enum DashboardWebinarParticipants200ApplicationXMLParticipantsAudioQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
/**
 * Screen share quality of the participant.
 */
export declare enum DashboardWebinarParticipants200ApplicationXMLParticipantsScreenShareQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
/**
 * Video quality of the participant.
 */
export declare enum DashboardWebinarParticipants200ApplicationXMLParticipantsVideoQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
export declare class DashboardWebinarParticipants200ApplicationXMLParticipants extends SpeakeasyBase {
    /**
     * Audio quality of the participant.
     */
    audioQuality?: DashboardWebinarParticipants200ApplicationXMLParticipantsAudioQualityEnum;
    /**
     * Participant connection type.
     */
    connectionType?: string;
    /**
     * Another identifier for the participant. Can be a number or characters, maximum length of 15 characters.
     */
    customerKey?: string;
    /**
     * Participant data center.
     */
    dataCenter?: string;
    /**
     *
     * @remarks
     *
     * The type of device using which the participant joined the webinar. The possible values for this field are:
     * * `Phone`: Participant joined via PSTN.
     * * `H.323/SIP`: Participant joined via an H.323 or SIP device.
     * * `Windows`: Participant joined via VoIP using a Windows device.
     * * `Mac`: Participant joined via VoIP using a Mac device.
     * * `iOS`: Participant joined via VoIP using an iOS device.
     * * `Android`: Participant joined via VoIP using an Android device.
     */
    device?: string;
    /**
     * Participant domain.
     */
    domain?: string;
    /**
     * Email address of the participant.
     */
    email?: string;
    /**
     * Participant hard disk ID.
     */
    harddiskId?: string;
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
     */
    id?: string;
    /**
     * Participant IP address.
     */
    ipAddress?: string;
    /**
     * Participant join time.
     */
    joinTime?: Date;
    /**
     * Possible reasons for why a participant left the Webinar.
     *
     * @remarks
     *
     */
    leaveReason?: string;
    /**
     * Participant leave time.
     */
    leaveTime?: Date;
    /**
     * Participant location.
     */
    location?: string;
    /**
     * Participant MAC address.
     */
    macAddr?: string;
    /**
     * Participant microphone.
     */
    microphone?: string;
    /**
     * Participant network type.
     */
    networkType?: string;
    /**
     * Participant PC name.
     */
    pcName?: string;
    /**
     * Participant record?
     */
    recording?: boolean;
    /**
     * Unique identifier of the registrant. This field is only returned if you entered "registrant_id" as the value of `include_fields` query parameter.
     */
    registrantId?: string;
    /**
     * Screen share quality of the participant.
     */
    screenShareQuality?: DashboardWebinarParticipants200ApplicationXMLParticipantsScreenShareQualityEnum;
    /**
     * Did the participant share an application?
     */
    shareApplication?: boolean;
    /**
     * Did the participant share their desktop?
     */
    shareDesktop?: boolean;
    /**
     * Did the participant share their whiteboard?
     */
    shareWhiteboard?: boolean;
    /**
     * Participant speaker.
     */
    speaker?: string;
    /**
     * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
     */
    userId?: string;
    /**
     * Participant display name.
     */
    userName?: string;
    /**
     * Participant version.
     */
    version?: string;
    /**
     * Video quality of the participant.
     */
    videoQuality?: DashboardWebinarParticipants200ApplicationXMLParticipantsVideoQualityEnum;
}
/**
 * Pagination object.
 */
export declare class DashboardWebinarParticipants200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * Array of user objects.
     */
    participants?: DashboardWebinarParticipants200ApplicationXMLParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
/**
 * Audio quality of the participant.
 */
export declare enum DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
/**
 * Screen share quality of the participant.
 */
export declare enum DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
/**
 * Video quality of the participant.
 */
export declare enum DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
export declare class DashboardWebinarParticipants200ApplicationJSONParticipants extends SpeakeasyBase {
    /**
     * Audio quality of the participant.
     */
    audioQuality?: DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnum;
    /**
     * Participant connection type.
     */
    connectionType?: string;
    /**
     * Another identifier for the participant. Can be a number or characters, maximum length of 15 characters.
     */
    customerKey?: string;
    /**
     * Participant data center.
     */
    dataCenter?: string;
    /**
     *
     * @remarks
     *
     * The type of device using which the participant joined the webinar. The possible values for this field are:
     * * `Phone`: Participant joined via PSTN.
     * * `H.323/SIP`: Participant joined via an H.323 or SIP device.
     * * `Windows`: Participant joined via VoIP using a Windows device.
     * * `Mac`: Participant joined via VoIP using a Mac device.
     * * `iOS`: Participant joined via VoIP using an iOS device.
     * * `Android`: Participant joined via VoIP using an Android device.
     */
    device?: string;
    /**
     * Participant domain.
     */
    domain?: string;
    /**
     * Email address of the participant.
     */
    email?: string;
    /**
     * Participant hard disk ID.
     */
    harddiskId?: string;
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
     */
    id?: string;
    /**
     * Participant IP address.
     */
    ipAddress?: string;
    /**
     * Participant join time.
     */
    joinTime?: Date;
    /**
     * Possible reasons for why a participant left the Webinar.
     *
     * @remarks
     *
     */
    leaveReason?: string;
    /**
     * Participant leave time.
     */
    leaveTime?: Date;
    /**
     * Participant location.
     */
    location?: string;
    /**
     * Participant MAC address.
     */
    macAddr?: string;
    /**
     * Participant microphone.
     */
    microphone?: string;
    /**
     * Participant network type.
     */
    networkType?: string;
    /**
     * Participant PC name.
     */
    pcName?: string;
    /**
     * Participant record?
     */
    recording?: boolean;
    /**
     * Unique identifier of the registrant. This field is only returned if you entered "registrant_id" as the value of `include_fields` query parameter.
     */
    registrantId?: string;
    /**
     * Screen share quality of the participant.
     */
    screenShareQuality?: DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnum;
    /**
     * Did the participant share an application?
     */
    shareApplication?: boolean;
    /**
     * Did the participant share their desktop?
     */
    shareDesktop?: boolean;
    /**
     * Did the participant share their whiteboard?
     */
    shareWhiteboard?: boolean;
    /**
     * Participant speaker.
     */
    speaker?: string;
    /**
     * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
     */
    userId?: string;
    /**
     * Participant display name.
     */
    userName?: string;
    /**
     * Participant version.
     */
    version?: string;
    /**
     * Video quality of the participant.
     */
    videoQuality?: DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnum;
}
/**
 * Pagination object.
 */
export declare class DashboardWebinarParticipants200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * Array of user objects.
     */
    participants?: DashboardWebinarParticipants200ApplicationJSONParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardWebinarParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar participants returned.
     */
    dashboardWebinarParticipants200ApplicationJSONObject?: DashboardWebinarParticipants200ApplicationJSON;
}
