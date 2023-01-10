package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarPollGetPathParams struct {
	PollID    string `pathParam:"style=simple,explode=false,name=pollId"`
	WebinarID int64  `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarPollGetSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarPollGetPollQuestionsTypeEnum string

const (
	WebinarPollGetPollQuestionsTypeEnumSingle   WebinarPollGetPollQuestionsTypeEnum = "single"
	WebinarPollGetPollQuestionsTypeEnumMultiple WebinarPollGetPollQuestionsTypeEnum = "multiple"
)

type WebinarPollGetPollQuestions struct {
	Answers []string                             `json:"answers,omitempty"`
	Name    *string                              `json:"name,omitempty"`
	Type    *WebinarPollGetPollQuestionsTypeEnum `json:"type,omitempty"`
}

type WebinarPollGetPollStatusEnum string

const (
	WebinarPollGetPollStatusEnumNotstart WebinarPollGetPollStatusEnum = "notstart"
	WebinarPollGetPollStatusEnumStarted  WebinarPollGetPollStatusEnum = "started"
	WebinarPollGetPollStatusEnumEnded    WebinarPollGetPollStatusEnum = "ended"
	WebinarPollGetPollStatusEnumSharing  WebinarPollGetPollStatusEnum = "sharing"
)

// WebinarPollGetPoll
// Poll
type WebinarPollGetPoll struct {
	ID        *string                       `json:"id,omitempty"`
	Questions []WebinarPollGetPollQuestions `json:"questions,omitempty"`
	Status    *WebinarPollGetPollStatusEnum `json:"status,omitempty"`
	Title     *string                       `json:"title,omitempty"`
}

type WebinarPollGetRequest struct {
	PathParams WebinarPollGetPathParams
	Security   WebinarPollGetSecurity
}

type WebinarPollGetResponse struct {
	Body        []byte
	ContentType string
	Poll        *WebinarPollGetPoll
	StatusCode  int64
}
