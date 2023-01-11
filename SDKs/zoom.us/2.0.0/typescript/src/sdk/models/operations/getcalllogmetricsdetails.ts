import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCallLogMetricsDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=call_id" })
  callId: string;
}


// GetCallLogMetricsDetails200ApplicationJsonCallee
/** 
 * Callee object contains information of the calee.
**/
export class GetCallLogMetricsDetails200ApplicationJsonCallee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=headset" })
  headset?: string;

  @SpeakeasyMetadata({ data: "json, name=isp" })
  isp?: string;

  @SpeakeasyMetadata({ data: "json, name=microphone" })
  microphone?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;
}


// GetCallLogMetricsDetails200ApplicationJsonCaller
/** 
 * Caller object contains information of the caller.
**/
export class GetCallLogMetricsDetails200ApplicationJsonCaller extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=headset" })
  headset?: string;

  @SpeakeasyMetadata({ data: "json, name=isp" })
  isp?: string;

  @SpeakeasyMetadata({ data: "json, name=microphone" })
  microphone?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;
}


export class GetCallLogMetricsDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_id" })
  callId?: string;

  @SpeakeasyMetadata({ data: "json, name=callee" })
  callee?: GetCallLogMetricsDetails200ApplicationJsonCallee;

  @SpeakeasyMetadata({ data: "json, name=caller" })
  caller?: GetCallLogMetricsDetails200ApplicationJsonCaller;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=mos" })
  mos?: string;
}


export class GetCallLogMetricsDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCallLogMetricsDetailsPathParams;
}


export class GetCallLogMetricsDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCallLogMetricsDetails200ApplicationJSONObject?: GetCallLogMetricsDetails200ApplicationJson;
}
