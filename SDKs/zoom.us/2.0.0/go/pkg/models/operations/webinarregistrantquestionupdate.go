package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarRegistrantQuestionUpdatePathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

// WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions
// Webinar Registrant Questions
type WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions struct {
	CustomQuestions []interface{} `json:"custom_questions,omitempty" multipartForm:"name=custom_questions,json"`
	Questions       []interface{} `json:"questions,omitempty" multipartForm:"name=questions,json"`
}

type WebinarRegistrantQuestionUpdateRequests struct {
	WebinarRegistrantQuestions  *WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions `request:"mediaType=application/json"`
	WebinarRegistrantQuestions1 *WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions `request:"mediaType=multipart/form-data"`
}

type WebinarRegistrantQuestionUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarRegistrantQuestionUpdateRequest struct {
	PathParams WebinarRegistrantQuestionUpdatePathParams
	Request    WebinarRegistrantQuestionUpdateRequests
	Security   WebinarRegistrantQuestionUpdateSecurity
}

type WebinarRegistrantQuestionUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
