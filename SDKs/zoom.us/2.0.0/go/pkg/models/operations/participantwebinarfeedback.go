package operations

import (
	"time"
)

type ParticipantWebinarFeedbackPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type ParticipantWebinarFeedbackTypeEnum string

const (
	ParticipantWebinarFeedbackTypeEnumPast    ParticipantWebinarFeedbackTypeEnum = "past"
	ParticipantWebinarFeedbackTypeEnumPastOne ParticipantWebinarFeedbackTypeEnum = "pastOne"
	ParticipantWebinarFeedbackTypeEnumLive    ParticipantWebinarFeedbackTypeEnum = "live"
)

type ParticipantWebinarFeedbackQueryParams struct {
	NextPageToken *string                             `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                              `queryParam:"style=form,explode=true,name=page_size"`
	Type          *ParticipantWebinarFeedbackTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type ParticipantWebinarFeedback200ApplicationJSONParticipantsQualityEnum string

const (
	ParticipantWebinarFeedback200ApplicationJSONParticipantsQualityEnumGood    ParticipantWebinarFeedback200ApplicationJSONParticipantsQualityEnum = "GOOD"
	ParticipantWebinarFeedback200ApplicationJSONParticipantsQualityEnumNotGood ParticipantWebinarFeedback200ApplicationJSONParticipantsQualityEnum = "NOT GOOD"
)

type ParticipantWebinarFeedback200ApplicationJSONParticipants struct {
	DateTime *time.Time                                                           `json:"date_time,omitempty"`
	Email    *string                                                              `json:"email,omitempty"`
	Quality  *ParticipantWebinarFeedback200ApplicationJSONParticipantsQualityEnum `json:"quality,omitempty"`
	UserID   *string                                                              `json:"user_id,omitempty"`
}

type ParticipantWebinarFeedback200ApplicationJSON struct {
	NextPageToken *string                                                    `json:"next_page_token,omitempty"`
	PageSize      *int64                                                     `json:"page_size,omitempty"`
	Participants  []ParticipantWebinarFeedback200ApplicationJSONParticipants `json:"participants,omitempty"`
}

type ParticipantWebinarFeedbackRequest struct {
	PathParams  ParticipantWebinarFeedbackPathParams
	QueryParams ParticipantWebinarFeedbackQueryParams
}

type ParticipantWebinarFeedbackResponse struct {
	Body                                               []byte
	ContentType                                        string
	StatusCode                                         int64
	ParticipantWebinarFeedback200ApplicationJSONObject *ParticipantWebinarFeedback200ApplicationJSON
}
