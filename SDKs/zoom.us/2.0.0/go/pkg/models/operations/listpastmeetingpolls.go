package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListPastMeetingPollsPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type ListPastMeetingPollsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListPastMeetingPolls200ApplicationJSONQuestionsQuestionDetails struct {
	Answer    *string    `json:"answer,omitempty"`
	DateTime  *time.Time `json:"date_time,omitempty"`
	PollingID *string    `json:"polling_id,omitempty"`
	Question  *string    `json:"question,omitempty"`
}

type ListPastMeetingPolls200ApplicationJSONQuestions struct {
	Email           *string                                                          `json:"email,omitempty"`
	Name            *string                                                          `json:"name,omitempty"`
	QuestionDetails []ListPastMeetingPolls200ApplicationJSONQuestionsQuestionDetails `json:"question_details,omitempty"`
}

type ListPastMeetingPolls200ApplicationJSON struct {
	ID        *int64                                            `json:"id,omitempty"`
	Questions []ListPastMeetingPolls200ApplicationJSONQuestions `json:"questions,omitempty"`
	StartTime *time.Time                                        `json:"start_time,omitempty"`
	UUID      *string                                           `json:"uuid,omitempty"`
}

type ListPastMeetingPollsRequest struct {
	PathParams ListPastMeetingPollsPathParams
	Security   ListPastMeetingPollsSecurity
}

type ListPastMeetingPollsResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ListPastMeetingPolls200ApplicationJSONObject *ListPastMeetingPolls200ApplicationJSON
}
