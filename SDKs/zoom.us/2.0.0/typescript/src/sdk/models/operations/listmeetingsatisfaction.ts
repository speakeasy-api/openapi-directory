/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListMeetingSatisfactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oAuth: string;
}

export class ListMeetingSatisfactionRequest extends SpeakeasyBase {
  /**
   * The start date for the query in “yyyy-mm-dd” format.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=from;dateTimeFormat=YYYY-MM-DD",
  })
  from?: Date;

  /**
   * The end date for the query in “yyyy-mm-dd” format.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=to;dateTimeFormat=YYYY-MM-DD",
  })
  to?: Date;
}

export class ListMeetingSatisfaction200ApplicationXMLClientSatisfaction extends SpeakeasyBase {
  /**
   * Date of the report.
   */
  @SpeakeasyMetadata()
  date?: Date;

  /**
   * The total number of "thumbs up" received for this meeting.
   */
  @SpeakeasyMetadata()
  goodCount?: number;

  /**
   * The total number of attendees who didn't submit any response (neither thumbs up nor thumbs down).
   */
  @SpeakeasyMetadata()
  noneCount?: number;

  /**
   * The total number of "thumbs down" received for this meeting.
   */
  @SpeakeasyMetadata()
  notGoodCount?: number;

  /**
   * Satisfaction Percentage.
   *
   * @remarks
   * The satisfaction percentage is calculated as `(good_count + none_count)` / `total_count`.
   */
  @SpeakeasyMetadata()
  satisfactionPercent?: number;
}

/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Client satisfaction data returned.
 */
export class ListMeetingSatisfaction200ApplicationXML extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListMeetingSatisfaction200ApplicationXMLClientSatisfaction,
  })
  clientSatisfaction?: ListMeetingSatisfaction200ApplicationXMLClientSatisfaction[];

  /**
   * Start date for this report in 'yyyy-mm-dd' format.
   */
  @SpeakeasyMetadata()
  from?: Date;

  /**
   * End date for this report in 'yyyy-mm-dd' format.
   */
  @SpeakeasyMetadata()
  to?: Date;

  /**
   * The total number of records available across all pages.
   */
  @SpeakeasyMetadata()
  totalRecords?: number;
}

export class ListMeetingSatisfaction200ApplicationJSONClientSatisfaction extends SpeakeasyBase {
  /**
   * Date of the report.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  /**
   * The total number of "thumbs up" received for this meeting.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "good_count" })
  goodCount?: number;

  /**
   * The total number of attendees who didn't submit any response (neither thumbs up nor thumbs down).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "none_count" })
  noneCount?: number;

  /**
   * The total number of "thumbs down" received for this meeting.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "not_good_count" })
  notGoodCount?: number;

  /**
   * Satisfaction Percentage.
   *
   * @remarks
   * The satisfaction percentage is calculated as `(good_count + none_count)` / `total_count`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "satisfaction_percent" })
  satisfactionPercent?: number;
}

/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Client satisfaction data returned.
 */
export class ListMeetingSatisfaction200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListMeetingSatisfaction200ApplicationJSONClientSatisfaction,
  })
  @Expose({ name: "client_satisfaction" })
  @Type(() => ListMeetingSatisfaction200ApplicationJSONClientSatisfaction)
  clientSatisfaction?: ListMeetingSatisfaction200ApplicationJSONClientSatisfaction[];

  /**
   * Start date for this report in 'yyyy-mm-dd' format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  from?: Date;

  /**
   * End date for this report in 'yyyy-mm-dd' format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  to?: Date;

  /**
   * The total number of records available across all pages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_records" })
  totalRecords?: number;
}

export class ListMeetingSatisfactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * **HTTP Status Code:** `200`<br>
   *
   * @remarks
   * Client satisfaction data returned.
   */
  @SpeakeasyMetadata()
  listMeetingSatisfaction200ApplicationJSONObject?: ListMeetingSatisfaction200ApplicationJSON;
}
