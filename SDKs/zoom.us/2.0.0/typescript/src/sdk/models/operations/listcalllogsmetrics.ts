import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListCallLogsMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality_type" })
  qualityType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: string;
}


// ListCallLogsMetrics200ApplicationJsonCallLogsCallee
/** 
 * Callee object contains information of the calee.
**/
export class ListCallLogsMetrics200ApplicationJsonCallLogsCallee extends SpeakeasyBase {
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


// ListCallLogsMetrics200ApplicationJsonCallLogsCaller
/** 
 * Caller object contains information of the caller.
**/
export class ListCallLogsMetrics200ApplicationJsonCallLogsCaller extends SpeakeasyBase {
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


export class ListCallLogsMetrics200ApplicationJsonCallLogs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_id" })
  callId?: string;

  @SpeakeasyMetadata({ data: "json, name=callee" })
  callee?: ListCallLogsMetrics200ApplicationJsonCallLogsCallee;

  @SpeakeasyMetadata({ data: "json, name=caller" })
  caller?: ListCallLogsMetrics200ApplicationJsonCallLogsCaller;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=mos" })
  mos?: string;
}


export class ListCallLogsMetrics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_logs", elemType: ListCallLogsMetrics200ApplicationJsonCallLogs })
  callLogs?: ListCallLogsMetrics200ApplicationJsonCallLogs[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListCallLogsMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCallLogsMetricsQueryParams;
}


export class ListCallLogsMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listCallLogsMetrics200ApplicationJSONObject?: ListCallLogsMetrics200ApplicationJson;
}
