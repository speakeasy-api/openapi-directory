import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportSignInSignOutActivitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: Date;
}


export class ReportSignInSignOutActivitiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ReportSignInSignOutActivities200ApplicationJsonActivityLogs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_type" })
  clientType?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// ReportSignInSignOutActivities200ApplicationJson
/** 
 * Report object
**/
export class ReportSignInSignOutActivities200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity_logs", elemType: ReportSignInSignOutActivities200ApplicationJsonActivityLogs })
  activityLogs?: ReportSignInSignOutActivities200ApplicationJsonActivityLogs[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


export class ReportSignInSignOutActivitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportSignInSignOutActivitiesQueryParams;

  @SpeakeasyMetadata()
  security: ReportSignInSignOutActivitiesSecurity;
}


export class ReportSignInSignOutActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportSignInSignOutActivities200ApplicationJSONObject?: ReportSignInSignOutActivities200ApplicationJson;
}
