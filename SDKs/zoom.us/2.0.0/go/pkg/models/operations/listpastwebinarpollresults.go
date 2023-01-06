package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListPastWebinarPollResultsPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type ListPastWebinarPollResultsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListPastWebinarPollResults200ApplicationJSONQuestionsQuestionDetails struct {
	Answer    *string    `json:"answer,omitempty"`
	DateTime  *time.Time `json:"date_time,omitempty"`
	PollingID *string    `json:"polling_id,omitempty"`
	Question  *string    `json:"question,omitempty"`
}

type ListPastWebinarPollResults200ApplicationJSONQuestions struct {
	Email           *string                                                                `json:"email,omitempty"`
	Name            *string                                                                `json:"name,omitempty"`
	QuestionDetails []ListPastWebinarPollResults200ApplicationJSONQuestionsQuestionDetails `json:"question_details,omitempty"`
}

type ListPastWebinarPollResults200ApplicationJSON struct {
	ID        *int64                                                  `json:"id,omitempty"`
	Questions []ListPastWebinarPollResults200ApplicationJSONQuestions `json:"questions,omitempty"`
	StartTime *time.Time                                              `json:"start_time,omitempty"`
	UUID      *string                                                 `json:"uuid,omitempty"`
}

type ListPastWebinarPollResultsRequest struct {
	PathParams ListPastWebinarPollResultsPathParams
	Security   ListPastWebinarPollResultsSecurity
}

type ListPastWebinarPollResultsResponse struct {
	Body                                               []byte
	ContentType                                        string
	StatusCode                                         int64
	ListPastWebinarPollResults200ApplicationJSONObject *ListPastWebinarPollResults200ApplicationJSON
}
