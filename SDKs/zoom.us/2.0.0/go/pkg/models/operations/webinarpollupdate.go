package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarPollUpdatePathParams struct {
	PollID    string `pathParam:"style=simple,explode=false,name=pollId"`
	WebinarID int64  `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarPollUpdatePollQuestionsTypeEnum string

const (
	WebinarPollUpdatePollQuestionsTypeEnumSingle   WebinarPollUpdatePollQuestionsTypeEnum = "single"
	WebinarPollUpdatePollQuestionsTypeEnumMultiple WebinarPollUpdatePollQuestionsTypeEnum = "multiple"
)

type WebinarPollUpdatePollQuestions struct {
	Answers []string                                `json:"answers,omitempty"`
	Name    *string                                 `json:"name,omitempty"`
	Type    *WebinarPollUpdatePollQuestionsTypeEnum `json:"type,omitempty"`
}

// WebinarPollUpdatePoll
// Poll
type WebinarPollUpdatePoll struct {
	Questions []WebinarPollUpdatePollQuestions `json:"questions,omitempty" multipartForm:"name=questions,json"`
	Title     *string                          `json:"title,omitempty" multipartForm:"name=title"`
}

type WebinarPollUpdateRequests struct {
	Poll  *WebinarPollUpdatePoll `request:"mediaType=application/json"`
	Poll1 *WebinarPollUpdatePoll `request:"mediaType=multipart/form-data"`
}

type WebinarPollUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarPollUpdateRequest struct {
	PathParams WebinarPollUpdatePathParams
	Request    WebinarPollUpdateRequests
	Security   WebinarPollUpdateSecurity
}

type WebinarPollUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
