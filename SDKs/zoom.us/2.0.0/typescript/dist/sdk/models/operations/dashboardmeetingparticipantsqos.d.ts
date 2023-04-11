import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardMeetingParticipantsQOSSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The meeting types: <br>`past` - Past meetings.<br>`live` - Live Meetings.
 */
export declare enum DashboardMeetingParticipantsQOSTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingParticipantsQOSRequest extends SpeakeasyBase {
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
     * The number of items returned per page.
     */
    pageSize?: number;
    /**
     * The meeting types: <br>`past` - Past meetings.<br>`live` - Live Meetings.
     */
    type?: DashboardMeetingParticipantsQOSTypeEnum;
}
/**
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
 */
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceFromCrc extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds.
     */
    latency?: string;
    /**
     * The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
}
/**
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
 */
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceToCrc extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds.
     */
    latency?: string;
    /**
     * The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
}
/**
 * Quality of Service object.
 */
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps.
     */
    bitrate?: string;
    /**
     * The rate at which your video camera can produce unique images, or frames. Zoom supports a frame rate of up to 30fps.
     */
    frameRate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds.
     */
    latency?: string;
    /**
     * Max loss: the max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
    /**
     * The number of pixels in each dimension that can be displayed by your video camera.
     */
    resolution?: string;
}
/**
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
 */
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceFromCrc extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds.
     */
    latency?: string;
    /**
     * The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
}
/**
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
 */
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceToCrc extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds.
     */
    latency?: string;
    /**
     * The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
}
/**
 * Quality of Service object.
 */
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject1 extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds.
     */
    latency?: string;
    /**
     * Max loss: the max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
}
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSCpuUsage extends SpeakeasyBase {
    /**
     * System Maximum CPU Usage
     */
    systemMaxCpuUsage?: string;
    /**
     * Zoom Average CPU Usage
     */
    zoomAvgCpuUsage?: string;
    /**
     * Zoom Maximum CPU Usage
     */
    zoomMaxCpuUsage?: string;
    /**
     * Zoom Minimum CPU Usage
     */
    zoomMinCpuUsage?: string;
}
/**
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
 */
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceFromCrc extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds.
     */
    latency?: string;
    /**
     * The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
}
/**
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
 */
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceToCrc extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds.
     */
    latency?: string;
    /**
     * The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
}
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOS extends SpeakeasyBase {
    /**
     * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
     */
    asDeviceFromCrc?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceFromCrc;
    /**
     * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
     */
    asDeviceToCrc?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceToCrc;
    /**
     * Quality of service object.
     */
    asInput?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject;
    /**
     * Quality of service object.
     */
    asOutput?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject;
    /**
     * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
     */
    audioDeviceFromCrc?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceFromCrc;
    /**
     * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
     */
    audioDeviceToCrc?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceToCrc;
    /**
     * Quality of Service object.
     */
    audioInput?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject1;
    /**
     * Quality of Service object.
     */
    audioOutput?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject1;
    cpuUsage?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSCpuUsage;
    /**
     * Date-time of QOS
     */
    dateTime?: Date;
    /**
     * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
     */
    videoDeviceFromCrc?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceFromCrc;
    /**
     * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
     */
    videoDeviceToCrc?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceToCrc;
    /**
     * Quality of service object.
     */
    videoInput?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject;
    /**
     * Quality of service object.
     */
    videoOutput?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject;
}
/**
 * Participant QOS.
 */
export declare class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOS extends SpeakeasyBase {
    /**
     * The type of device using which the participant joined the meeting.
     */
    device?: string;
    /**
     * Participant's PC domain.
     */
    domain?: string;
    /**
     * Participant's hard disk ID.
     */
    harddiskId?: string;
    /**
     * Participant's IP address.
     */
    ipAddress?: string;
    /**
     * The time at which participant joined the meeting.
     */
    joinTime?: Date;
    /**
     * The time at which participant left the meeting.
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
     * Participant's PC name.
     */
    pcName?: string;
    /**
     * Participant ID.
     */
    userId?: string;
    /**
     * Participant display name.
     */
    userName?: string;
    /**
     * Quality of service provided to the user.
     */
    userQos?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOS[];
    /**
     * Participant's Zoom Client version.
     */
    version?: string;
}
/**
 * Pagination object.
 */
export declare class DashboardMeetingParticipantsQOSParticipantQOSList extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of items per page.
     */
    pageSize?: number;
    /**
     * Array of user objects.
     */
    participants?: DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOS[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardMeetingParticipantsQOSResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting participants returned.<br>
     * Only available for paid accounts that have enabled the dashboard feature.
     */
    participantQOSList?: DashboardMeetingParticipantsQOSParticipantQOSList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
