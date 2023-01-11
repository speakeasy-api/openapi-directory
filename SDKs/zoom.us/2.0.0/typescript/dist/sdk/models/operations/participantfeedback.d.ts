import { SpeakeasyBase } from "../../../internal/utils";
export declare class ParticipantFeedbackPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare enum ParticipantFeedbackTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class ParticipantFeedbackQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    type?: ParticipantFeedbackTypeEnum;
}
export declare enum ParticipantFeedback200ApplicationJsonParticipantsQualityEnum {
    Good = "GOOD",
    NotGood = "NOT GOOD"
}
export declare class ParticipantFeedback200ApplicationJsonParticipants extends SpeakeasyBase {
    dateTime?: Date;
    email?: string;
    quality?: ParticipantFeedback200ApplicationJsonParticipantsQualityEnum;
    userId?: string;
}
export declare class ParticipantFeedback200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    participants?: ParticipantFeedback200ApplicationJsonParticipants[];
}
export declare class ParticipantFeedbackRequest extends SpeakeasyBase {
    pathParams: ParticipantFeedbackPathParams;
    queryParams: ParticipantFeedbackQueryParams;
}
export declare class ParticipantFeedbackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    participantFeedback200ApplicationJSONObject?: ParticipantFeedback200ApplicationJson;
}
