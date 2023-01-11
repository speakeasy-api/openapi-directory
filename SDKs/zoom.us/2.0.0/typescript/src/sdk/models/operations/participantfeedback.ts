import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ParticipantFeedbackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}

export enum ParticipantFeedbackTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}


export class ParticipantFeedbackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ParticipantFeedbackTypeEnum;
}

export enum ParticipantFeedback200ApplicationJsonParticipantsQualityEnum {
    Good = "GOOD",
    NotGood = "NOT GOOD"
}


export class ParticipantFeedback200ApplicationJsonParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality?: ParticipantFeedback200ApplicationJsonParticipantsQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}


export class ParticipantFeedback200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: ParticipantFeedback200ApplicationJsonParticipants })
  participants?: ParticipantFeedback200ApplicationJsonParticipants[];
}


export class ParticipantFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ParticipantFeedbackPathParams;

  @SpeakeasyMetadata()
  queryParams: ParticipantFeedbackQueryParams;
}


export class ParticipantFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  participantFeedback200ApplicationJSONObject?: ParticipantFeedback200ApplicationJson;
}
