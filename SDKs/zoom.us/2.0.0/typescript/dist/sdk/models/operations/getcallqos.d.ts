import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCallQoSPathParams extends SpeakeasyBase {
    callId: string;
}
export declare class GetCallQoS200ApplicationJsonCalleeQosReceivingQos extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    maxLoss?: string;
    mos?: string;
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationJsonCalleeQosReceiving extends SpeakeasyBase {
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationJsonCalleeQosReceivingQos;
}
export declare class GetCallQoS200ApplicationJsonCalleeQosSendingQos extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    maxLoss?: string;
    mos?: string;
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationJsonCalleeQosSending extends SpeakeasyBase {
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationJsonCalleeQosSendingQos;
}
export declare class GetCallQoS200ApplicationJsonCalleeQos extends SpeakeasyBase {
    receiving?: GetCallQoS200ApplicationJsonCalleeQosReceiving[];
    sending?: GetCallQoS200ApplicationJsonCalleeQosSending[];
}
export declare class GetCallQoS200ApplicationJsonCallerQosReceivingQos extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    maxLoss?: string;
    mos?: string;
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationJsonCallerQosReceiving extends SpeakeasyBase {
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationJsonCallerQosReceivingQos;
}
export declare class GetCallQoS200ApplicationJsonCallerQosSendingQos extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    maxLoss?: string;
    mos?: string;
    networkDelay?: string;
}
export declare class GetCallQoS200ApplicationJsonCallerQosSending extends SpeakeasyBase {
    dateTime?: Date;
    qos?: GetCallQoS200ApplicationJsonCallerQosSendingQos;
}
/**
 * Quality of Service object that represents the call quality data of the caller.
**/
export declare class GetCallQoS200ApplicationJsonCallerQos extends SpeakeasyBase {
    receiving?: GetCallQoS200ApplicationJsonCallerQosReceiving[];
    sending?: GetCallQoS200ApplicationJsonCallerQosSending[];
}
export declare class GetCallQoS200ApplicationJson extends SpeakeasyBase {
    callId?: string;
    calleeQos?: GetCallQoS200ApplicationJsonCalleeQos;
    callerQos?: GetCallQoS200ApplicationJsonCallerQos;
}
export declare class GetCallQoSRequest extends SpeakeasyBase {
    pathParams: GetCallQoSPathParams;
}
export declare class GetCallQoSResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getCallQoS200ApplicationJSONObject?: GetCallQoS200ApplicationJson;
}
