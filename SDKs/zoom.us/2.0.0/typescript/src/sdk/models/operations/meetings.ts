/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class MeetingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oAuth: string;
}

/**
 * The meeting types: <br>`scheduled` - This includes all valid past meetings (unexpired), live meetings and upcoming scheduled meetings. It is equivalent to the combined list of "Previous Meetings" and "Upcoming Meetings" displayed in the user's [Meetings page](https://zoom.us/meeting) on the Zoom Web Portal.<br>`live` - All the ongoing meetings.<br>`upcoming` - All upcoming meetings including live meetings.
 */
export enum MeetingsTypeEnum {
  Scheduled = "scheduled",
  Live = "live",
  Upcoming = "upcoming",
}

export class MeetingsRequest extends SpeakeasyBase {
  /**
   * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=next_page_token",
  })
  nextPageToken?: string;

  /**
   * The page number of the current page in the returned records.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_number",
  })
  pageNumber?: string;

  /**
   * The number of records returned within a single API call.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_size",
  })
  pageSize?: number;

  /**
   * The meeting types: <br>`scheduled` - This includes all valid past meetings (unexpired), live meetings and upcoming scheduled meetings. It is equivalent to the combined list of "Previous Meetings" and "Upcoming Meetings" displayed in the user's [Meetings page](https://zoom.us/meeting) on the Zoom Web Portal.<br>`live` - All the ongoing meetings.<br>`upcoming` - All upcoming meetings including live meetings.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: MeetingsTypeEnum;

  /**
   * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userId",
  })
  userId: string;
}

/**
 * Meeting Types:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with fixed time.
 */
export enum MeetingsGroupListMeetingsTypeEnum {
  One = "1",
  Two = "2",
  Three = "3",
  Eight = "8",
}

export class MeetingsGroupListMeetings extends SpeakeasyBase {
  /**
   * Meeting description. The length of agenda gets truncated to 250 characters when you list all meetings for a user. To view the complete agenda of a meeting, retrieve details for a single meeting [here](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meeting).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "agenda" })
  agenda?: string;

  /**
   * Time of creation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  /**
   * Meeting duration.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration?: number;

  /**
   * ID of the user who is set as the host of the meeting.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "host_id" })
  hostId?: string;

  /**
   * Meeting ID - also known as the meeting number in long (int64) format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  /**
   * URL using which participants can join a meeting.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "join_url" })
  joinUrl?: string;

  /**
   * [Personal meeting ID](https://support.zoom.us/hc/en-us/articles/201362843-What-is-Personal-Meeting-ID-PMI-and-Personal-Link-). This field is only returned if PMI was used to schedule the meeting.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pmi" })
  pmi?: string;

  /**
   * Meeting start time.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startTime?: Date;

  /**
   * Timezone to format the meeting start time.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone?: string;

  /**
   * Meeting topic.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "topic" })
  topic?: string;

  /**
   * Meeting Types:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with fixed time.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: MeetingsGroupListMeetingsTypeEnum;

  /**
   * Unique Meeting ID. Each meeting instance will generate its own Meeting UUID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}

/**
 * Pagination Object.
 */
export class MeetingsGroupList extends SpeakeasyBase {
  /**
   * List of Meeting objects.
   */
  @SpeakeasyMetadata({ elemType: MeetingsGroupListMeetings })
  @Expose({ name: "meetings" })
  @Type(() => MeetingsGroupListMeetings)
  meetings?: MeetingsGroupListMeetings[];

  /**
   * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken?: string;

  /**
   * The number of pages returned for the request made.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "page_count" })
  pageCount?: number;

  /**
   * The page number of the current results.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "page_number" })
  pageNumber?: number;

  /**
   * The number of records returned with a single API call.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "page_size" })
  pageSize?: number;

  /**
   * The total number of all the records available across pages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_records" })
  totalRecords?: number;
}

export class MeetingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * **HTTP Status Code:** `200`<br>
   *
   * @remarks
   * List of meeting objects returned.
   */
  @SpeakeasyMetadata()
  groupList?: MeetingsGroupList;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
