import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCallQoSPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callId" })
  callId: string;
}


export class GetCallQoS200ApplicationJsonCalleeQosReceivingQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=mos" })
  mos?: string;

  @SpeakeasyMetadata({ data: "json, name=network_delay" })
  networkDelay?: string;
}


export class GetCallQoS200ApplicationJsonCalleeQosReceiving extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=qos" })
  qos?: GetCallQoS200ApplicationJsonCalleeQosReceivingQos;
}


export class GetCallQoS200ApplicationJsonCalleeQosSendingQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=mos" })
  mos?: string;

  @SpeakeasyMetadata({ data: "json, name=network_delay" })
  networkDelay?: string;
}


export class GetCallQoS200ApplicationJsonCalleeQosSending extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=qos" })
  qos?: GetCallQoS200ApplicationJsonCalleeQosSendingQos;
}


export class GetCallQoS200ApplicationJsonCalleeQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=receiving", elemType: GetCallQoS200ApplicationJsonCalleeQosReceiving })
  receiving?: GetCallQoS200ApplicationJsonCalleeQosReceiving[];

  @SpeakeasyMetadata({ data: "json, name=sending", elemType: GetCallQoS200ApplicationJsonCalleeQosSending })
  sending?: GetCallQoS200ApplicationJsonCalleeQosSending[];
}


export class GetCallQoS200ApplicationJsonCallerQosReceivingQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=mos" })
  mos?: string;

  @SpeakeasyMetadata({ data: "json, name=network_delay" })
  networkDelay?: string;
}


export class GetCallQoS200ApplicationJsonCallerQosReceiving extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=qos" })
  qos?: GetCallQoS200ApplicationJsonCallerQosReceivingQos;
}


export class GetCallQoS200ApplicationJsonCallerQosSendingQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=mos" })
  mos?: string;

  @SpeakeasyMetadata({ data: "json, name=network_delay" })
  networkDelay?: string;
}


export class GetCallQoS200ApplicationJsonCallerQosSending extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=qos" })
  qos?: GetCallQoS200ApplicationJsonCallerQosSendingQos;
}


// GetCallQoS200ApplicationJsonCallerQos
/** 
 * Quality of Service object that represents the call quality data of the caller.
**/
export class GetCallQoS200ApplicationJsonCallerQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=receiving", elemType: GetCallQoS200ApplicationJsonCallerQosReceiving })
  receiving?: GetCallQoS200ApplicationJsonCallerQosReceiving[];

  @SpeakeasyMetadata({ data: "json, name=sending", elemType: GetCallQoS200ApplicationJsonCallerQosSending })
  sending?: GetCallQoS200ApplicationJsonCallerQosSending[];
}


export class GetCallQoS200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_id" })
  callId?: string;

  @SpeakeasyMetadata({ data: "json, name=callee_qos" })
  calleeQos?: GetCallQoS200ApplicationJsonCalleeQos;

  @SpeakeasyMetadata({ data: "json, name=caller_qos" })
  callerQos?: GetCallQoS200ApplicationJsonCallerQos;
}


export class GetCallQoSRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCallQoSPathParams;
}


export class GetCallQoSResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCallQoS200ApplicationJSONObject?: GetCallQoS200ApplicationJson;
}
