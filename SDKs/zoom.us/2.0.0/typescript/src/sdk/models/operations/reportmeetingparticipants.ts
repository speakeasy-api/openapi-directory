import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportMeetingParticipantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}

export enum ReportMeetingParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}


export class ReportMeetingParticipantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_fields" })
  includeFields?: ReportMeetingParticipantsIncludeFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ReportMeetingParticipantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ReportMeetingParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_key" })
  customerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=failover" })
  failover?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=join_time" })
  joinTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=leave_time" })
  leaveTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=registrant_id" })
  registrantId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_email" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}


// ReportMeetingParticipants200ApplicationJson
/** 
 * Pagination object.
**/
export class ReportMeetingParticipants200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: ReportMeetingParticipants200ApplicationJsonParticipants })
  participants?: ReportMeetingParticipants200ApplicationJsonParticipants[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ReportMeetingParticipantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReportMeetingParticipantsPathParams;

  @SpeakeasyMetadata()
  queryParams: ReportMeetingParticipantsQueryParams;

  @SpeakeasyMetadata()
  security: ReportMeetingParticipantsSecurity;
}


export class ReportMeetingParticipantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportMeetingParticipants200ApplicationJSONObject?: ReportMeetingParticipants200ApplicationJson;
}
