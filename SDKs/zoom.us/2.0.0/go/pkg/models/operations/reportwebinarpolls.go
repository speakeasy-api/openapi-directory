package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportWebinarPollsPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type ReportWebinarPollsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportWebinarPolls200ApplicationJSONQuestionsQuestionDetails struct {
	Answer    *string    `json:"answer,omitempty"`
	DateTime  *time.Time `json:"date_time,omitempty"`
	PollingID *string    `json:"polling_id,omitempty"`
	Question  *string    `json:"question,omitempty"`
}

type ReportWebinarPolls200ApplicationJSONQuestions struct {
	Email           *string                                                        `json:"email,omitempty"`
	Name            *string                                                        `json:"name,omitempty"`
	QuestionDetails []ReportWebinarPolls200ApplicationJSONQuestionsQuestionDetails `json:"question_details,omitempty"`
}

type ReportWebinarPolls200ApplicationJSON struct {
	ID        *int64                                          `json:"id,omitempty"`
	Questions []ReportWebinarPolls200ApplicationJSONQuestions `json:"questions,omitempty"`
	StartTime *time.Time                                      `json:"start_time,omitempty"`
	UUID      *string                                         `json:"uuid,omitempty"`
}

type ReportWebinarPollsRequest struct {
	PathParams ReportWebinarPollsPathParams
	Security   ReportWebinarPollsSecurity
}

type ReportWebinarPollsResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	ReportWebinarPolls200ApplicationJSONObject *ReportWebinarPolls200ApplicationJSON
}
