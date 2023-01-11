import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReportUsersTypeEnum {
    Active = "active",
    Inactive = "inactive"
}


export class ReportUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ReportUsersTypeEnum;
}


export class ReportUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// ReportUsers200ApplicationJsonUsersCustomAttributes
/** 
 * Custom attribute(s) that have been assigned to the user.
**/
export class ReportUsers200ApplicationJsonUsersCustomAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ReportUsers200ApplicationJsonUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_attributes" })
  customAttributes?: ReportUsers200ApplicationJsonUsersCustomAttributes;

  @SpeakeasyMetadata({ data: "json, name=dept" })
  dept?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=meeting_minutes" })
  meetingMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=meetings" })
  meetings?: number;

  @SpeakeasyMetadata({ data: "json, name=participants" })
  participants?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;
}


export class ReportUsers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_meeting_minutes" })
  totalMeetingMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=total_meetings" })
  totalMeetings?: number;

  @SpeakeasyMetadata({ data: "json, name=total_participants" })
  totalParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: ReportUsers200ApplicationJsonUsers })
  users?: ReportUsers200ApplicationJsonUsers[];
}


export class ReportUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportUsersQueryParams;

  @SpeakeasyMetadata()
  security: ReportUsersSecurity;
}


export class ReportUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportUsers200ApplicationJSONObject?: ReportUsers200ApplicationJson;
}
