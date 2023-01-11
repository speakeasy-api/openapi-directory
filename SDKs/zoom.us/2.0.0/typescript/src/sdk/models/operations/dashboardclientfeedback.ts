import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardClientFeedbackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class DashboardClientFeedbackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardClientFeedback200ApplicationJsonClientFeedbacks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedback_id" })
  feedbackId?: string;

  @SpeakeasyMetadata({ data: "json, name=feedback_name" })
  feedbackName?: string;

  @SpeakeasyMetadata({ data: "json, name=participants_count" })
  participantsCount?: number;
}


export class DashboardClientFeedback200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_feedbacks", elemType: DashboardClientFeedback200ApplicationJsonClientFeedbacks })
  clientFeedbacks?: DashboardClientFeedback200ApplicationJsonClientFeedbacks[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class DashboardClientFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DashboardClientFeedbackQueryParams;

  @SpeakeasyMetadata()
  security: DashboardClientFeedbackSecurity;
}


export class DashboardClientFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardClientFeedback200ApplicationJSONObject?: DashboardClientFeedback200ApplicationJson;
}
