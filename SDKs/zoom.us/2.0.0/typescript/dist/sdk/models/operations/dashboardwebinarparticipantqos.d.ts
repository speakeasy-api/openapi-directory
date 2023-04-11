import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardWebinarParticipantQOSSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The webinar type.
 */
export declare enum DashboardWebinarParticipantQOSTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarParticipantQOSRequest extends SpeakeasyBase {
    /**
     * Participant ID.
     */
    participantId: string;
    /**
     * The webinar type.
     */
    type?: DashboardWebinarParticipantQOSTypeEnum;
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
export declare class DashboardWebinarParticipantQOSParticipantQOSUserQOSAsDeviceFromCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantQOSParticipantQOSUserQOSAsDeviceToCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantQOSParticipantQOSUserQOSQOSObject extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantQOSParticipantQOSUserQOSAudioDeviceFromCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantQOSParticipantQOSUserQOSAudioDeviceToCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantQOSParticipantQOSUserQOSQOSObject1 extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantQOSParticipantQOSUserQOSCpuUsage extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantQOSParticipantQOSUserQOSVideoDeviceFromCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantQOSParticipantQOSUserQOSVideoDeviceToCrc extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantQOSParticipantQOSUserQOS extends SpeakeasyBase {
    /**
     * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
     */
    asDeviceFromCrc?: DashboardWebinarParticipantQOSParticipantQOSUserQOSAsDeviceFromCrc;
    /**
     * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
     */
    asDeviceToCrc?: DashboardWebinarParticipantQOSParticipantQOSUserQOSAsDeviceToCrc;
    /**
     * Quality of service object.
     */
    asInput?: DashboardWebinarParticipantQOSParticipantQOSUserQOSQOSObject;
    /**
     * Quality of service object.
     */
    asOutput?: DashboardWebinarParticipantQOSParticipantQOSUserQOSQOSObject;
    /**
     * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
     */
    audioDeviceFromCrc?: DashboardWebinarParticipantQOSParticipantQOSUserQOSAudioDeviceFromCrc;
    /**
     * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
     */
    audioDeviceToCrc?: DashboardWebinarParticipantQOSParticipantQOSUserQOSAudioDeviceToCrc;
    /**
     * Quality of Service object.
     */
    audioInput?: DashboardWebinarParticipantQOSParticipantQOSUserQOSQOSObject1;
    /**
     * Quality of Service object.
     */
    audioOutput?: DashboardWebinarParticipantQOSParticipantQOSUserQOSQOSObject1;
    cpuUsage?: DashboardWebinarParticipantQOSParticipantQOSUserQOSCpuUsage;
    /**
     * Date-time of QOS
     */
    dateTime?: Date;
    /**
     * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
     */
    videoDeviceFromCrc?: DashboardWebinarParticipantQOSParticipantQOSUserQOSVideoDeviceFromCrc;
    /**
     * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
     */
    videoDeviceToCrc?: DashboardWebinarParticipantQOSParticipantQOSUserQOSVideoDeviceToCrc;
    /**
     * Quality of service object.
     */
    videoInput?: DashboardWebinarParticipantQOSParticipantQOSUserQOSQOSObject;
    /**
     * Quality of service object.
     */
    videoOutput?: DashboardWebinarParticipantQOSParticipantQOSUserQOSQOSObject;
}
/**
 * Participant QOS.
 */
export declare class DashboardWebinarParticipantQOSParticipantQOS extends SpeakeasyBase {
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
    userQos?: DashboardWebinarParticipantQOSParticipantQOSUserQOS[];
    /**
     * Participant's Zoom Client version.
     */
    version?: string;
}
export declare class DashboardWebinarParticipantQOSResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar participant QOS returned.
     */
    participantQOS?: DashboardWebinarParticipantQOSParticipantQOS;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
