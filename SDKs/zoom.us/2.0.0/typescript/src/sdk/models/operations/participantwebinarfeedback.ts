import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ParticipantWebinarFeedbackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}

export enum ParticipantWebinarFeedbackTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}


export class ParticipantWebinarFeedbackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ParticipantWebinarFeedbackTypeEnum;
}

export enum ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum {
    Good = "GOOD",
    NotGood = "NOT GOOD"
}


export class ParticipantWebinarFeedback200ApplicationJsonParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality?: ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}


export class ParticipantWebinarFeedback200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: ParticipantWebinarFeedback200ApplicationJsonParticipants })
  participants?: ParticipantWebinarFeedback200ApplicationJsonParticipants[];
}


export class ParticipantWebinarFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ParticipantWebinarFeedbackPathParams;

  @SpeakeasyMetadata()
  queryParams: ParticipantWebinarFeedbackQueryParams;
}


export class ParticipantWebinarFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  participantWebinarFeedback200ApplicationJSONObject?: ParticipantWebinarFeedback200ApplicationJson;
}
