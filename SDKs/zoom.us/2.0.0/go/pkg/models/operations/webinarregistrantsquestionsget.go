package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarRegistrantsQuestionsGetPathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarRegistrantsQuestionsGetSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions
// Webinar Registrant Questions
type WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions struct {
	CustomQuestions []interface{} `json:"custom_questions,omitempty"`
	Questions       []interface{} `json:"questions,omitempty"`
}

type WebinarRegistrantsQuestionsGetRequest struct {
	PathParams WebinarRegistrantsQuestionsGetPathParams
	Security   WebinarRegistrantsQuestionsGetSecurity
}

type WebinarRegistrantsQuestionsGetResponse struct {
	Body                       []byte
	ContentType                string
	StatusCode                 int64
	WebinarRegistrantQuestions *WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions
}
