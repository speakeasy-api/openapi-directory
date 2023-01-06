package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListPastWebinarQaPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type ListPastWebinarQaSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListPastWebinarQa200ApplicationJSONQuestionsQuestionDetails struct {
	Answer   *string `json:"answer,omitempty"`
	Question *string `json:"question,omitempty"`
}

type ListPastWebinarQa200ApplicationJSONQuestions struct {
	Email           *string                                                       `json:"email,omitempty"`
	Name            *string                                                       `json:"name,omitempty"`
	QuestionDetails []ListPastWebinarQa200ApplicationJSONQuestionsQuestionDetails `json:"question_details,omitempty"`
}

type ListPastWebinarQa200ApplicationJSON struct {
	ID        *int64                                         `json:"id,omitempty"`
	Questions []ListPastWebinarQa200ApplicationJSONQuestions `json:"questions,omitempty"`
	StartTime *time.Time                                     `json:"start_time,omitempty"`
	UUID      *string                                        `json:"uuid,omitempty"`
}

type ListPastWebinarQaRequest struct {
	PathParams ListPastWebinarQaPathParams
	Security   ListPastWebinarQaSecurity
}

type ListPastWebinarQaResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	ListPastWebinarQA200ApplicationJSONObject *ListPastWebinarQa200ApplicationJSON
}
