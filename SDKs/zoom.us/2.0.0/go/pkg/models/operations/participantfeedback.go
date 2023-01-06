package operations

import (
	"time"
)

type ParticipantFeedbackPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type ParticipantFeedbackTypeEnum string

const (
	ParticipantFeedbackTypeEnumPast    ParticipantFeedbackTypeEnum = "past"
	ParticipantFeedbackTypeEnumPastOne ParticipantFeedbackTypeEnum = "pastOne"
	ParticipantFeedbackTypeEnumLive    ParticipantFeedbackTypeEnum = "live"
)

type ParticipantFeedbackQueryParams struct {
	NextPageToken *string                      `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                       `queryParam:"style=form,explode=true,name=page_size"`
	Type          *ParticipantFeedbackTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type ParticipantFeedback200ApplicationJSONParticipantsQualityEnum string

const (
	ParticipantFeedback200ApplicationJSONParticipantsQualityEnumGood    ParticipantFeedback200ApplicationJSONParticipantsQualityEnum = "GOOD"
	ParticipantFeedback200ApplicationJSONParticipantsQualityEnumNotGood ParticipantFeedback200ApplicationJSONParticipantsQualityEnum = "NOT GOOD"
)

type ParticipantFeedback200ApplicationJSONParticipants struct {
	DateTime *time.Time                                                    `json:"date_time,omitempty"`
	Email    *string                                                       `json:"email,omitempty"`
	Quality  *ParticipantFeedback200ApplicationJSONParticipantsQualityEnum `json:"quality,omitempty"`
	UserID   *string                                                       `json:"user_id,omitempty"`
}

type ParticipantFeedback200ApplicationJSON struct {
	NextPageToken *string                                             `json:"next_page_token,omitempty"`
	PageSize      *int64                                              `json:"page_size,omitempty"`
	Participants  []ParticipantFeedback200ApplicationJSONParticipants `json:"participants,omitempty"`
}

type ParticipantFeedbackRequest struct {
	PathParams  ParticipantFeedbackPathParams
	QueryParams ParticipantFeedbackQueryParams
}

type ParticipantFeedbackResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	ParticipantFeedback200ApplicationJSONObject *ParticipantFeedback200ApplicationJSON
}
