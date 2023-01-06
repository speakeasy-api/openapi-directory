package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportWebinarQaPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type ReportWebinarQaSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportWebinarQa200ApplicationJSONQuestionsQuestionDetails struct {
	Answer   *string `json:"answer,omitempty"`
	Question *string `json:"question,omitempty"`
}

type ReportWebinarQa200ApplicationJSONQuestions struct {
	Email           *string                                                     `json:"email,omitempty"`
	Name            *string                                                     `json:"name,omitempty"`
	QuestionDetails []ReportWebinarQa200ApplicationJSONQuestionsQuestionDetails `json:"question_details,omitempty"`
}

type ReportWebinarQa200ApplicationJSON struct {
	ID        *int64                                       `json:"id,omitempty"`
	Questions []ReportWebinarQa200ApplicationJSONQuestions `json:"questions,omitempty"`
	StartTime *time.Time                                   `json:"start_time,omitempty"`
	UUID      *string                                      `json:"uuid,omitempty"`
}

type ReportWebinarQaRequest struct {
	PathParams ReportWebinarQaPathParams
	Security   ReportWebinarQaSecurity
}

type ReportWebinarQaResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	ReportWebinarQA200ApplicationJSONObject *ReportWebinarQa200ApplicationJSON
}
