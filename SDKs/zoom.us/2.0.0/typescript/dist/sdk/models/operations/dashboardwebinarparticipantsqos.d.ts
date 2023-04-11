import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardWebinarParticipantsQOSSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The webinar type.
 */
export declare enum DashboardWebinarParticipantsQOSTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarParticipantsQOSRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of items returned per page.
     */
    pageSize?: number;
    /**
     * The webinar type.
     */
    type?: DashboardWebinarParticipantsQOSTypeEnum;
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
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
 */
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceFromCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceToCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceFromCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceToCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject1 extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSCpuUsage extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceFromCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceToCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOS extends SpeakeasyBase {
    /**
     * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
     */
    asDeviceFromCrc?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceFromCrc;
    /**
     * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
     */
    asDeviceToCrc?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceToCrc;
    /**
     * Quality of service object.
     */
    asInput?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject;
    /**
     * Quality of service object.
     */
    asOutput?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject;
    /**
     * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
     */
    audioDeviceFromCrc?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceFromCrc;
    /**
     * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
     */
    audioDeviceToCrc?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceToCrc;
    /**
     * Quality of Service object.
     */
    audioInput?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject1;
    /**
     * Quality of Service object.
     */
    audioOutput?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject1;
    cpuUsage?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSCpuUsage;
    /**
     * Date-time of QOS
     */
    dateTime?: Date;
    /**
     * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
     */
    videoDeviceFromCrc?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceFromCrc;
    /**
     * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
     */
    videoDeviceToCrc?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceToCrc;
    /**
     * Quality of service object.
     */
    videoInput?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject;
    /**
     * Quality of service object.
     */
    videoOutput?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject;
}
/**
 * Participant QOS.
 */
export declare class DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOS extends SpeakeasyBase {
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
    userQos?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOSUserQOS[];
    /**
     * Participant's Zoom Client version.
     */
    version?: string;
}
/**
 * Pagination object.
 */
export declare class DashboardWebinarParticipantsQOSParticipantQOSList extends SpeakeasyBase {
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
    participants?: DashboardWebinarParticipantsQOSParticipantQOSListParticipantQOS[];
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardWebinarParticipantsQOSResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar participants returned.<br>
     * Only available for paid accounts that have enabled the Dashboard feature.
     */
    participantQOSList?: DashboardWebinarParticipantsQOSParticipantQOSList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
