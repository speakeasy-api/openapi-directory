import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardClientFeedbackDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=feedbackId" })
  feedbackId: string;
}


export class DashboardClientFeedbackDetailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: Date;
}


export class DashboardClientFeedbackDetailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=meeting_id" })
  meetingId?: string;

  @SpeakeasyMetadata({ data: "json, name=participant_name" })
  participantName?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;
}


// DashboardClientFeedbackDetail200ApplicationJson
/** 
 * Pagination object.
**/
export class DashboardClientFeedbackDetail200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_feedback_details", elemType: DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails })
  clientFeedbackDetails?: DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;
}


export class DashboardClientFeedbackDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardClientFeedbackDetailPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardClientFeedbackDetailQueryParams;

  @SpeakeasyMetadata()
  security: DashboardClientFeedbackDetailSecurity;
}


export class DashboardClientFeedbackDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardClientFeedbackDetail200ApplicationJSONObject?: DashboardClientFeedbackDetail200ApplicationJson;
}
