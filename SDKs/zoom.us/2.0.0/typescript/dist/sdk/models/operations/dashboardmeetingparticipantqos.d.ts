import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardMeetingParticipantQOSSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The meeting types: <br>`past` - Past meetings.<br>`live` - Live Meetings.
 */
export declare enum DashboardMeetingParticipantQOSTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingParticipantQOSRequest extends SpeakeasyBase {
    /**
     * The meeting ID or the meeting UUID.  If a meeting ID is provided in the request instead of a UUID, the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * Participant ID.
     */
    participantId: string;
    /**
     * The meeting types: <br>`past` - Past meetings.<br>`live` - Live Meetings.
     */
    type?: DashboardMeetingParticipantQOSTypeEnum;
}
/**
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
 */
export declare class DashboardMeetingParticipantQOSParticipantQOSUserQOSAsDeviceFromCrc extends SpeakeasyBase {
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
export declare class DashboardMeetingParticipantQOSParticipantQOSUserQOSAsDeviceToCrc extends SpeakeasyBase {
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
export declare class DashboardMeetingParticipantQOSParticipantQOSUserQOSQOSObject extends SpeakeasyBase {
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
export declare class DashboardMeetingParticipantQOSParticipantQOSUserQOSAudioDeviceFromCrc extends SpeakeasyBase {
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
export declare class DashboardMeetingParticipantQOSParticipantQOSUserQOSAudioDeviceToCrc extends SpeakeasyBase {
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
export declare class DashboardMeetingParticipantQOSParticipantQOSUserQOSQOSObject1 extends SpeakeasyBase {
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
export declare class DashboardMeetingParticipantQOSParticipantQOSUserQOSCpuUsage extends SpeakeasyBase {
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
export declare class DashboardMeetingParticipantQOSParticipantQOSUserQOSVideoDeviceFromCrc extends SpeakeasyBase {
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
export declare class DashboardMeetingParticipantQOSParticipantQOSUserQOSVideoDeviceToCrc extends SpeakeasyBase {
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
export declare class DashboardMeetingParticipantQOSParticipantQOSUserQOS extends SpeakeasyBase {
    /**
     * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
     */
    asDeviceFromCrc?: DashboardMeetingParticipantQOSParticipantQOSUserQOSAsDeviceFromCrc;
    /**
     * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
     */
    asDeviceToCrc?: DashboardMeetingParticipantQOSParticipantQOSUserQOSAsDeviceToCrc;
    /**
     * Quality of service object.
     */
    asInput?: DashboardMeetingParticipantQOSParticipantQOSUserQOSQOSObject;
    /**
     * Quality of service object.
     */
    asOutput?: DashboardMeetingParticipantQOSParticipantQOSUserQOSQOSObject;
    /**
     * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
     */
    audioDeviceFromCrc?: DashboardMeetingParticipantQOSParticipantQOSUserQOSAudioDeviceFromCrc;
    /**
     * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
     */
    audioDeviceToCrc?: DashboardMeetingParticipantQOSParticipantQOSUserQOSAudioDeviceToCrc;
    /**
     * Quality of Service object.
     */
    audioInput?: DashboardMeetingParticipantQOSParticipantQOSUserQOSQOSObject1;
    /**
     * Quality of Service object.
     */
    audioOutput?: DashboardMeetingParticipantQOSParticipantQOSUserQOSQOSObject1;
    cpuUsage?: DashboardMeetingParticipantQOSParticipantQOSUserQOSCpuUsage;
    /**
     * Date-time of QOS
     */
    dateTime?: Date;
    /**
     * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
     */
    videoDeviceFromCrc?: DashboardMeetingParticipantQOSParticipantQOSUserQOSVideoDeviceFromCrc;
    /**
     * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
     */
    videoDeviceToCrc?: DashboardMeetingParticipantQOSParticipantQOSUserQOSVideoDeviceToCrc;
    /**
     * Quality of service object.
     */
    videoInput?: DashboardMeetingParticipantQOSParticipantQOSUserQOSQOSObject;
    /**
     * Quality of service object.
     */
    videoOutput?: DashboardMeetingParticipantQOSParticipantQOSUserQOSQOSObject;
}
/**
 * Participant QOS.
 */
export declare class DashboardMeetingParticipantQOSParticipantQOS extends SpeakeasyBase {
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
    userQos?: DashboardMeetingParticipantQOSParticipantQOSUserQOS[];
    /**
     * Participant's Zoom Client version.
     */
    version?: string;
}
export declare class DashboardMeetingParticipantQOSResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting participant QOS returned.<br>
     * Only available for paid account that have enabled the dashboard feature.
     */
    participantQOS?: DashboardMeetingParticipantQOSParticipantQOS;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
