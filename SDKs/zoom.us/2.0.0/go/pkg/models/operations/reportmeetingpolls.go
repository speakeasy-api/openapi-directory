package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportMeetingPollsPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type ReportMeetingPollsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportMeetingPolls200ApplicationJSONQuestionsQuestionDetails struct {
	Answer    *string    `json:"answer,omitempty"`
	DateTime  *time.Time `json:"date_time,omitempty"`
	PollingID *string    `json:"polling_id,omitempty"`
	Question  *string    `json:"question,omitempty"`
}

type ReportMeetingPolls200ApplicationJSONQuestions struct {
	Email           *string                                                        `json:"email,omitempty"`
	Name            *string                                                        `json:"name,omitempty"`
	QuestionDetails []ReportMeetingPolls200ApplicationJSONQuestionsQuestionDetails `json:"question_details,omitempty"`
}

type ReportMeetingPolls200ApplicationJSON struct {
	ID        *int64                                          `json:"id,omitempty"`
	Questions []ReportMeetingPolls200ApplicationJSONQuestions `json:"questions,omitempty"`
	StartTime *time.Time                                      `json:"start_time,omitempty"`
	UUID      *string                                         `json:"uuid,omitempty"`
}

type ReportMeetingPollsRequest struct {
	PathParams ReportMeetingPollsPathParams
	Security   ReportMeetingPollsSecurity
}

type ReportMeetingPollsResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	ReportMeetingPolls200ApplicationJSONObject *ReportMeetingPolls200ApplicationJSON
}
