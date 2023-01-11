import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReportOperationLogsCategoryTypeEnum {
    All = "all",
    User = "user",
    UserSettings = "user_settings",
    Account = "account",
    Billing = "billing",
    Im = "im",
    Recording = "recording",
    PhoneContacts = "phone_contacts",
    Webinar = "webinar",
    SubAccount = "sub_account",
    Role = "role",
    ZoomRooms = "zoom_rooms"
}


export class ReportOperationLogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category_type" })
  categoryType?: ReportOperationLogsCategoryTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class ReportOperationLogsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ReportOperationLogs200ApplicationJsonOperationLogs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=category_type" })
  categoryType?: string;

  @SpeakeasyMetadata({ data: "json, name=operation_detail" })
  operationDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;
}


// ReportOperationLogs200ApplicationJson
/** 
 * Pagination object.
**/
export class ReportOperationLogs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=operation_logs", elemType: ReportOperationLogs200ApplicationJsonOperationLogs })
  operationLogs?: ReportOperationLogs200ApplicationJsonOperationLogs[];

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class ReportOperationLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportOperationLogsQueryParams;

  @SpeakeasyMetadata()
  security: ReportOperationLogsSecurity;
}


export class ReportOperationLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportOperationLogs200ApplicationJSONObject?: ReportOperationLogs200ApplicationJson;
}
