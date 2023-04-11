import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardMeetingParticipantsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Provide `registrant_id` as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [meeting registrant](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingregistrants). This is not supported for `live` meeting types.
 */
export declare enum DashboardMeetingParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}
/**
 * The meeting types: <br>`past` - Past meetings.<br>`pastOne` - Past one user meetings.<br>`live` - Live meetings.
 */
export declare enum DashboardMeetingParticipantsTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingParticipantsRequest extends SpeakeasyBase {
    /**
     * Provide `registrant_id` as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [meeting registrant](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingregistrants). This is not supported for `live` meeting types.
     */
    includeFields?: DashboardMeetingParticipantsIncludeFieldsEnum;
    /**
     * The meeting ID or the meeting UUID.  If a meeting ID is provided in the request instead of a UUID, the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The meeting types: <br>`past` - Past meetings.<br>`pastOne` - Past one user meetings.<br>`live` - Live meetings.
     */
    type?: DashboardMeetingParticipantsTypeEnum;
}
/**
 * Audio quality of the participant.
 */
export declare enum DashboardMeetingParticipants200ApplicationXMLParticipantsAudioQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
/**
 * Participant's network type.
 */
export declare enum DashboardMeetingParticipants200ApplicationXMLParticipantsNetworkTypeEnum {
    Wired = "Wired",
    Wifi = "Wifi",
    Ppp = "PPP",
    Cellular3GAnd4G = "Cellular (3G and 4G)",
    Others = "Others"
}
/**
 * Screen share quality of the participant.
 */
export declare enum DashboardMeetingParticipants200ApplicationXMLParticipantsScreenShareQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
/**
 * Indicates whether the participant is in the waiting room or in the meeting.
 *
 * @remarks
 *
 * The value of this field can be `in_meeting` or `in_waiting_room`.
 */
export declare enum DashboardMeetingParticipants200ApplicationXMLParticipantsStatusEnum {
    InMeeting = "in_meeting",
    InWaitingRoom = "in_waiting_room"
}
/**
 * Video quality of the participant.
 */
export declare enum DashboardMeetingParticipants200ApplicationXMLParticipantsVideoQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
export declare class DashboardMeetingParticipants200ApplicationXMLParticipants extends SpeakeasyBase {
    /**
     * Audio quality of the participant.
     */
    audioQuality?: DashboardMeetingParticipants200ApplicationXMLParticipantsAudioQualityEnum;
    /**
     * The type of camera used by participant during the meeting.
     */
    camera?: string;
    /**
     * Participant connection type.
     */
    connectionType?: string;
    /**
     * Another identifier for the participant. Can be a number or characters, maximum length of 15 characters.
     */
    customerKey?: string;
    /**
     * Data Center where participant's meeting data is stored.
     */
    dataCenter?: string;
    /**
     * The type of device using which the participant joined the meeting. The possible values for this field are:
     *
     * @remarks
     * * `Phone`: Participant joined via PSTN.
     * * `H.323/SIP`: Participant joined via an H.323 or SIP device.
     * * `Windows`: Participant joined via VoIP using a Windows device.
     * * `Mac`: Participant joined via VoIP using a Mac device.
     * * `iOS`: Participant joined via VoIP using an iOS device.
     * * `Android`: Participant joined via VoIP using an Android device.
     */
    device?: string;
    /**
     * Participant's PC domain.
     */
    domain?: string;
    /**
     * Email address of the participant.
     */
    email?: string;
    /**
     * Participant's hard disk ID.
     */
    harddiskId?: string;
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
     */
    id?: string;
    /**
     * The number of participants who joined via Zoom Room.
     */
    inRoomParticipants?: number;
    /**
     * Participant's IP address.
     */
    ipAddress?: string;
    /**
     * The time at which participant joined the meeting.
     */
    joinTime?: Date;
    /**
     * Possible reasons for why participant left the meeting.
     */
    leaveReason?: string;
    /**
     * The time at which a participant left the meeting. For live meetings, this field will only be returned if a participant has left the ongoing meeting.
     */
    leaveTime?: Date;
    /**
     * Participant's location.
     */
    location?: string;
    /**
     * Participant's MAC address.
     */
    macAddr?: string;
    /**
     * The type of Microphone that participant used during the meeting.
     */
    microphone?: string;
    /**
     * Participant's network type.
     */
    networkType?: DashboardMeetingParticipants200ApplicationXMLParticipantsNetworkTypeEnum;
    /**
     * Name of Participant's PC.
     */
    pcName?: string;
    /**
     * Indicates whether or not recording was used during the meeting.
     */
    recording?: boolean;
    /**
     * Unique identifier of the registrant. This field is only returned if you entered "registrant_id" as the value of `include_fields` query parameter. This is not supported for `live` meeting types.
     */
    registrantId?: string;
    /**
     * Screen share quality of the participant.
     */
    screenShareQuality?: DashboardMeetingParticipants200ApplicationXMLParticipantsScreenShareQualityEnum;
    /**
     * Indicates whether or not a user selected to share an iPhone/iPad app during the screenshare.
     */
    shareApplication?: boolean;
    /**
     * Indicates whether or not a user selected to share their desktop during the screenshare.
     */
    shareDesktop?: boolean;
    /**
     * Indicates whether or not a user selected to share their whiteboard during the screenshare.
     */
    shareWhiteboard?: boolean;
    /**
     * The type of speaker participant used during the meeting.
     */
    speaker?: string;
    /**
     * Indicates whether the participant is in the waiting room or in the meeting.
     *
     * @remarks
     *
     * The value of this field can be `in_meeting` or `in_waiting_room`.
     */
    status?: DashboardMeetingParticipants200ApplicationXMLParticipantsStatusEnum;
    /**
     * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
     */
    userId?: string;
    /**
     * Participant display name.
     */
    userName?: string;
    /**
     * Participant's Zoom Client version.
     */
    version?: string;
    /**
     * Video quality of the participant.
     */
    videoQuality?: DashboardMeetingParticipants200ApplicationXMLParticipantsVideoQualityEnum;
}
/**
 * Pagination object.
 */
export declare class DashboardMeetingParticipants200ApplicationXML extends SpeakeasyBase {
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
     * Array of participant session objects. If a participant left a meeting and rejoined the same meeting, their information will appear multiple times (as many times as they joined the meeting).
     */
    participants?: DashboardMeetingParticipants200ApplicationXMLParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
/**
 * Audio quality of the participant.
 */
export declare enum DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
/**
 * Participant's network type.
 */
export declare enum DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum {
    Wired = "Wired",
    Wifi = "Wifi",
    Ppp = "PPP",
    Cellular3GAnd4G = "Cellular (3G and 4G)",
    Others = "Others"
}
/**
 * Screen share quality of the participant.
 */
export declare enum DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
/**
 * Indicates whether the participant is in the waiting room or in the meeting.
 *
 * @remarks
 *
 * The value of this field can be `in_meeting` or `in_waiting_room`.
 */
export declare enum DashboardMeetingParticipants200ApplicationJSONParticipantsStatusEnum {
    InMeeting = "in_meeting",
    InWaitingRoom = "in_waiting_room"
}
/**
 * Video quality of the participant.
 */
export declare enum DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
export declare class DashboardMeetingParticipants200ApplicationJSONParticipants extends SpeakeasyBase {
    /**
     * Audio quality of the participant.
     */
    audioQuality?: DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum;
    /**
     * The type of camera used by participant during the meeting.
     */
    camera?: string;
    /**
     * Participant connection type.
     */
    connectionType?: string;
    /**
     * Another identifier for the participant. Can be a number or characters, maximum length of 15 characters.
     */
    customerKey?: string;
    /**
     * Data Center where participant's meeting data is stored.
     */
    dataCenter?: string;
    /**
     * The type of device using which the participant joined the meeting. The possible values for this field are:
     *
     * @remarks
     * * `Phone`: Participant joined via PSTN.
     * * `H.323/SIP`: Participant joined via an H.323 or SIP device.
     * * `Windows`: Participant joined via VoIP using a Windows device.
     * * `Mac`: Participant joined via VoIP using a Mac device.
     * * `iOS`: Participant joined via VoIP using an iOS device.
     * * `Android`: Participant joined via VoIP using an Android device.
     */
    device?: string;
    /**
     * Participant's PC domain.
     */
    domain?: string;
    /**
     * Email address of the participant.
     */
    email?: string;
    /**
     * Participant's hard disk ID.
     */
    harddiskId?: string;
    /**
     * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
     */
    id?: string;
    /**
     * The number of participants who joined via Zoom Room.
     */
    inRoomParticipants?: number;
    /**
     * Participant's IP address.
     */
    ipAddress?: string;
    /**
     * The time at which participant joined the meeting.
     */
    joinTime?: Date;
    /**
     * Possible reasons for why participant left the meeting.
     */
    leaveReason?: string;
    /**
     * The time at which a participant left the meeting. For live meetings, this field will only be returned if a participant has left the ongoing meeting.
     */
    leaveTime?: Date;
    /**
     * Participant's location.
     */
    location?: string;
    /**
     * Participant's MAC address.
     */
    macAddr?: string;
    /**
     * The type of Microphone that participant used during the meeting.
     */
    microphone?: string;
    /**
     * Participant's network type.
     */
    networkType?: DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum;
    /**
     * Name of Participant's PC.
     */
    pcName?: string;
    /**
     * Indicates whether or not recording was used during the meeting.
     */
    recording?: boolean;
    /**
     * Unique identifier of the registrant. This field is only returned if you entered "registrant_id" as the value of `include_fields` query parameter. This is not supported for `live` meeting types.
     */
    registrantId?: string;
    /**
     * Screen share quality of the participant.
     */
    screenShareQuality?: DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum;
    /**
     * Indicates whether or not a user selected to share an iPhone/iPad app during the screenshare.
     */
    shareApplication?: boolean;
    /**
     * Indicates whether or not a user selected to share their desktop during the screenshare.
     */
    shareDesktop?: boolean;
    /**
     * Indicates whether or not a user selected to share their whiteboard during the screenshare.
     */
    shareWhiteboard?: boolean;
    /**
     * The type of speaker participant used during the meeting.
     */
    speaker?: string;
    /**
     * Indicates whether the participant is in the waiting room or in the meeting.
     *
     * @remarks
     *
     * The value of this field can be `in_meeting` or `in_waiting_room`.
     */
    status?: DashboardMeetingParticipants200ApplicationJSONParticipantsStatusEnum;
    /**
     * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
     */
    userId?: string;
    /**
     * Participant display name.
     */
    userName?: string;
    /**
     * Participant's Zoom Client version.
     */
    version?: string;
    /**
     * Video quality of the participant.
     */
    videoQuality?: DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum;
}
/**
 * Pagination object.
 */
export declare class DashboardMeetingParticipants200ApplicationJSON extends SpeakeasyBase {
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
     * Array of participant session objects. If a participant left a meeting and rejoined the same meeting, their information will appear multiple times (as many times as they joined the meeting).
     */
    participants?: DashboardMeetingParticipants200ApplicationJSONParticipants[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardMeetingParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting participants returned.<br>
     * Only available for paid accounts that have enabled the dashboard feature.
     */
    dashboardMeetingParticipants200ApplicationJSONObject?: DashboardMeetingParticipants200ApplicationJSON;
}
