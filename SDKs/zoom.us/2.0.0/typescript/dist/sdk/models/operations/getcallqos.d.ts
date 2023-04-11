import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCallQoSRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the call.
     */
    callId: string;
}
export declare class GetCallQoS200ApplicationXMLCalleeQosReceivingQos extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second in kbps that can be transmitted along a digital network.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The max amount of packet loss, i.e., the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
    /**
     * Mean Opinion Score(MOS) measures voice quality on a scale of 1 to 5. A MOS greater than or equal to 3.5 means good quality, while below 3.5 means poor quality.
     */
    mos?: string;
    /**
     * The amount of time(in milliseconds) it takes for a VoIP packet to travel from one point to another.
     */
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationXMLCalleeQosReceiving extends SpeakeasyBase {
    /**
     * Date and time at which the QoS was received.
     */
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationXMLCalleeQosReceivingQos;
}
export declare class GetCallQoS200ApplicationXMLCalleeQosSendingQos extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second expressed in kbps that can be transmitted along a digital network.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The max amount of packet loss, i.e., the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
    /**
     * Mean Opinion Score(MOS) measures voice quality on a scale of 1 to 5. A MOS greater than or equal to 3.5 means good quality, while below 3.5 means poor quality.
     */
    mos?: string;
    /**
     * The amount of time(in milliseconds) it takes for a VoIP packet to travel from one point to another.
     */
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationXMLCalleeQosSending extends SpeakeasyBase {
    /**
     * Date and time at which the QoS was delivered.
     */
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationXMLCalleeQosSendingQos;
}
export declare class GetCallQoS200ApplicationXMLCalleeQos extends SpeakeasyBase {
    /**
     * QoS received by the callee.
     */
    receiving?: GetCallQoS200ApplicationXMLCalleeQosReceiving[];
    /**
     * QoS sent by the callee.
     */
    sending?: GetCallQoS200ApplicationXMLCalleeQosSending[];
}
export declare class GetCallQoS200ApplicationXMLCallerQosReceivingQos extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second in kbps that can be transmitted along a digital network.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The max amount of packet loss, i.e., the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
    /**
     * Mean Opinion Score(MOS) measures voice quality on a scale of 1 to 5. A MOS greater than or equal to 3.5 means good quality, while below 3.5 means poor quality.
     */
    mos?: string;
    /**
     * The amount of time(in milliseconds) it takes for a VoIP packet to travel from one point to another.
     */
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationXMLCallerQosReceiving extends SpeakeasyBase {
    /**
     * Date and time at which the QoS was received.
     */
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationXMLCallerQosReceivingQos;
}
export declare class GetCallQoS200ApplicationXMLCallerQosSendingQos extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second in kbps that can be transmitted along a digital network.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The max amount of packet loss, i.e., the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
    /**
     * Mean Opinion Score(MOS) measures voice quality on a scale of 1 to 5. A MOS greater than or equal to 3.5 means good quality, while below 3.5 means poor quality.
     */
    mos?: string;
    /**
     * The amount of time(in milliseconds) it takes for a VoIP packet to travel from one point to another.
     */
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationXMLCallerQosSending extends SpeakeasyBase {
    /**
     * Date and time at which the QoS was delivered.
     */
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationXMLCallerQosSendingQos;
}
/**
 * Quality of Service object that represents the call quality data of the caller.
 */
export declare class GetCallQoS200ApplicationXMLCallerQos extends SpeakeasyBase {
    /**
     * QoS received by the caller.
     */
    receiving?: GetCallQoS200ApplicationXMLCallerQosReceiving[];
    /**
     * QoS sent by the caller.
     */
    sending?: GetCallQoS200ApplicationXMLCallerQosSending[];
}
export declare class GetCallQoS200ApplicationXML extends SpeakeasyBase {
    /**
     * Unique identifier of the phone call.
     */
    callId?: string;
    calleeQos?: GetCallQoS200ApplicationXMLCalleeQos;
    /**
     * Quality of Service object that represents the call quality data of the caller.
     */
    callerQos?: GetCallQoS200ApplicationXMLCallerQos;
}
export declare class GetCallQoS200ApplicationJSONCalleeQosReceivingQos extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second in kbps that can be transmitted along a digital network.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The max amount of packet loss, i.e., the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
    /**
     * Mean Opinion Score(MOS) measures voice quality on a scale of 1 to 5. A MOS greater than or equal to 3.5 means good quality, while below 3.5 means poor quality.
     */
    mos?: string;
    /**
     * The amount of time(in milliseconds) it takes for a VoIP packet to travel from one point to another.
     */
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationJSONCalleeQosReceiving extends SpeakeasyBase {
    /**
     * Date and time at which the QoS was received.
     */
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationJSONCalleeQosReceivingQos;
}
export declare class GetCallQoS200ApplicationJSONCalleeQosSendingQos extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second expressed in kbps that can be transmitted along a digital network.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The max amount of packet loss, i.e., the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
    /**
     * Mean Opinion Score(MOS) measures voice quality on a scale of 1 to 5. A MOS greater than or equal to 3.5 means good quality, while below 3.5 means poor quality.
     */
    mos?: string;
    /**
     * The amount of time(in milliseconds) it takes for a VoIP packet to travel from one point to another.
     */
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationJSONCalleeQosSending extends SpeakeasyBase {
    /**
     * Date and time at which the QoS was delivered.
     */
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationJSONCalleeQosSendingQos;
}
export declare class GetCallQoS200ApplicationJSONCalleeQos extends SpeakeasyBase {
    /**
     * QoS received by the callee.
     */
    receiving?: GetCallQoS200ApplicationJSONCalleeQosReceiving[];
    /**
     * QoS sent by the callee.
     */
    sending?: GetCallQoS200ApplicationJSONCalleeQosSending[];
}
export declare class GetCallQoS200ApplicationJSONCallerQosReceivingQos extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second in kbps that can be transmitted along a digital network.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The max amount of packet loss, i.e., the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
    /**
     * Mean Opinion Score(MOS) measures voice quality on a scale of 1 to 5. A MOS greater than or equal to 3.5 means good quality, while below 3.5 means poor quality.
     */
    mos?: string;
    /**
     * The amount of time(in milliseconds) it takes for a VoIP packet to travel from one point to another.
     */
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationJSONCallerQosReceiving extends SpeakeasyBase {
    /**
     * Date and time at which the QoS was received.
     */
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationJSONCallerQosReceivingQos;
}
export declare class GetCallQoS200ApplicationJSONCallerQosSendingQos extends SpeakeasyBase {
    /**
     * The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination.
     */
    avgLoss?: string;
    /**
     * The number of bits per second in kbps that can be transmitted along a digital network.
     */
    bitrate?: string;
    /**
     * The variation in the delay of received packets. The value of this field is expressed in milliseconds.
     */
    jitter?: string;
    /**
     * The max amount of packet loss, i.e., the max percentage of packets that fail to arrive at their destination.
     */
    maxLoss?: string;
    /**
     * Mean Opinion Score(MOS) measures voice quality on a scale of 1 to 5. A MOS greater than or equal to 3.5 means good quality, while below 3.5 means poor quality.
     */
    mos?: string;
    /**
     * The amount of time(in milliseconds) it takes for a VoIP packet to travel from one point to another.
     */
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationJSONCallerQosSending extends SpeakeasyBase {
    /**
     * Date and time at which the QoS was delivered.
     */
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationJSONCallerQosSendingQos;
}
/**
 * Quality of Service object that represents the call quality data of the caller.
 */
export declare class GetCallQoS200ApplicationJSONCallerQos extends SpeakeasyBase {
    /**
     * QoS received by the caller.
     */
    receiving?: GetCallQoS200ApplicationJSONCallerQosReceiving[];
    /**
     * QoS sent by the caller.
     */
    sending?: GetCallQoS200ApplicationJSONCallerQosSending[];
}
export declare class GetCallQoS200ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique identifier of the phone call.
     */
    callId?: string;
    calleeQos?: GetCallQoS200ApplicationJSONCalleeQos;
    /**
     * Quality of Service object that represents the call quality data of the caller.
     */
    callerQos?: GetCallQoS200ApplicationJSONCallerQos;
}
export declare class GetCallQoSResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getCallQoS200ApplicationJSONObject?: GetCallQoS200ApplicationJSON;
}
