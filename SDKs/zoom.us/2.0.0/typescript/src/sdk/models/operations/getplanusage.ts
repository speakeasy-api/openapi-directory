import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlanUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class GetPlanUsageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetPlanUsage200ApplicationJsonPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}


export class GetPlanUsage200ApplicationJsonPlanLargeMeeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}


// GetPlanUsage200ApplicationJsonPlanRecording
/** 
 * Recording Plan
**/
export class GetPlanUsage200ApplicationJsonPlanRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free_storage" })
  freeStorage?: string;

  @SpeakeasyMetadata({ data: "json, name=free_storage_usage" })
  freeStorageUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_storage" })
  planStorage?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_storage_exceed" })
  planStorageExceed?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_storage_usage" })
  planStorageUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// GetPlanUsage200ApplicationJsonPlanUnited
/** 
 * [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
**/
export class GetPlanUsage200ApplicationJsonPlanUnited extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}


export class GetPlanUsage200ApplicationJsonPlanWebinar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}


export class GetPlanUsage200ApplicationJsonPlanZoomRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}


export class GetPlanUsage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_base", elemType: GetPlanUsage200ApplicationJsonPlanBase })
  planBase?: GetPlanUsage200ApplicationJsonPlanBase[];

  @SpeakeasyMetadata({ data: "json, name=plan_large_meeting", elemType: GetPlanUsage200ApplicationJsonPlanLargeMeeting })
  planLargeMeeting?: GetPlanUsage200ApplicationJsonPlanLargeMeeting[];

  @SpeakeasyMetadata({ data: "json, name=plan_recording" })
  planRecording?: GetPlanUsage200ApplicationJsonPlanRecording;

  @SpeakeasyMetadata({ data: "json, name=plan_united" })
  planUnited?: GetPlanUsage200ApplicationJsonPlanUnited;

  @SpeakeasyMetadata({ data: "json, name=plan_webinar", elemType: GetPlanUsage200ApplicationJsonPlanWebinar })
  planWebinar?: GetPlanUsage200ApplicationJsonPlanWebinar[];

  @SpeakeasyMetadata({ data: "json, name=plan_zoom_rooms", elemType: GetPlanUsage200ApplicationJsonPlanZoomRooms })
  planZoomRooms?: GetPlanUsage200ApplicationJsonPlanZoomRooms[];
}


export class GetPlanUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlanUsagePathParams;

  @SpeakeasyMetadata()
  security: GetPlanUsageSecurity;
}


export class GetPlanUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPlanUsage200ApplicationJSONObject?: GetPlanUsage200ApplicationJson;
}
