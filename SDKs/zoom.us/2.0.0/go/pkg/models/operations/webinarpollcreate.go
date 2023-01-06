package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarPollCreatePathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarPollCreatePollQuestionsTypeEnum string

const (
	WebinarPollCreatePollQuestionsTypeEnumSingle   WebinarPollCreatePollQuestionsTypeEnum = "single"
	WebinarPollCreatePollQuestionsTypeEnumMultiple WebinarPollCreatePollQuestionsTypeEnum = "multiple"
)

type WebinarPollCreatePollQuestions struct {
	Answers []string                                `json:"answers,omitempty"`
	Name    *string                                 `json:"name,omitempty"`
	Type    *WebinarPollCreatePollQuestionsTypeEnum `json:"type,omitempty"`
}

// WebinarPollCreatePoll
// Poll
type WebinarPollCreatePoll struct {
	Questions []WebinarPollCreatePollQuestions `json:"questions,omitempty" multipartForm:"name=questions,json"`
	Title     *string                          `json:"title,omitempty" multipartForm:"name=title"`
}

type WebinarPollCreateRequests struct {
	Poll  *WebinarPollCreatePoll `request:"mediaType=application/json"`
	Poll1 *WebinarPollCreatePoll `request:"mediaType=multipart/form-data"`
}

type WebinarPollCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarPollCreateRequest struct {
	PathParams WebinarPollCreatePathParams
	Request    WebinarPollCreateRequests
	Security   WebinarPollCreateSecurity
}

type WebinarPollCreateResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	Poll        *WebinarPollCreatePoll
	StatusCode  int64
}
