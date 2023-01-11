import { SpeakeasyBase } from "../../../internal/utils";
export declare class ParticipantWebinarFeedbackPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare enum ParticipantWebinarFeedbackTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class ParticipantWebinarFeedbackQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    type?: ParticipantWebinarFeedbackTypeEnum;
}
export declare enum ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum {
    Good = "GOOD",
    NotGood = "NOT GOOD"
}
export declare class ParticipantWebinarFeedback200ApplicationJsonParticipants extends SpeakeasyBase {
    dateTime?: Date;
    email?: string;
    quality?: ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum;
    userId?: string;
}
export declare class ParticipantWebinarFeedback200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    participants?: ParticipantWebinarFeedback200ApplicationJsonParticipants[];
}
export declare class ParticipantWebinarFeedbackRequest extends SpeakeasyBase {
    pathParams: ParticipantWebinarFeedbackPathParams;
    queryParams: ParticipantWebinarFeedbackQueryParams;
}
export declare class ParticipantWebinarFeedbackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    participantWebinarFeedback200ApplicationJSONObject?: ParticipantWebinarFeedback200ApplicationJson;
}
