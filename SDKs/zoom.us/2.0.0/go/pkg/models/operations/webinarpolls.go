package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarPollsPathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarPollsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarPollsPollListPollQuestionsTypeEnum string

const (
	WebinarPollsPollListPollQuestionsTypeEnumSingle   WebinarPollsPollListPollQuestionsTypeEnum = "single"
	WebinarPollsPollListPollQuestionsTypeEnumMultiple WebinarPollsPollListPollQuestionsTypeEnum = "multiple"
)

type WebinarPollsPollListPollQuestions struct {
	Answers []string                                   `json:"answers,omitempty"`
	Name    *string                                    `json:"name,omitempty"`
	Type    *WebinarPollsPollListPollQuestionsTypeEnum `json:"type,omitempty"`
}

// WebinarPollsPollListPoll
// Poll
type WebinarPollsPollListPoll struct {
	Questions []WebinarPollsPollListPollQuestions `json:"questions,omitempty"`
	Title     *string                             `json:"title,omitempty"`
}

// WebinarPollsPollList
// Poll List
type WebinarPollsPollList struct {
	Polls        []WebinarPollsPollListPoll `json:"polls,omitempty"`
	TotalRecords *int64                     `json:"total_records,omitempty"`
}

type WebinarPollsRequest struct {
	PathParams WebinarPollsPathParams
	Security   WebinarPollsSecurity
}

type WebinarPollsResponse struct {
	Body        []byte
	ContentType string
	PollList    *WebinarPollsPollList
	StatusCode  int64
}
