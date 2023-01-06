package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingPollGetPathParams struct {
	MeetingID int64  `pathParam:"style=simple,explode=false,name=meetingId"`
	PollID    string `pathParam:"style=simple,explode=false,name=pollId"`
}

type MeetingPollGetSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingPollGetPollQuestionsTypeEnum string

const (
	MeetingPollGetPollQuestionsTypeEnumSingle   MeetingPollGetPollQuestionsTypeEnum = "single"
	MeetingPollGetPollQuestionsTypeEnumMultiple MeetingPollGetPollQuestionsTypeEnum = "multiple"
)

type MeetingPollGetPollQuestions struct {
	Answers []string                             `json:"answers,omitempty"`
	Name    *string                              `json:"name,omitempty"`
	Type    *MeetingPollGetPollQuestionsTypeEnum `json:"type,omitempty"`
}

// MeetingPollGetPoll
// Poll
type MeetingPollGetPoll struct {
	Questions []MeetingPollGetPollQuestions `json:"questions,omitempty"`
	Title     *string                       `json:"title,omitempty"`
}

type MeetingPollGetRequest struct {
	PathParams MeetingPollGetPathParams
	Security   MeetingPollGetSecurity
}

type MeetingPollGetResponse struct {
	Body        []byte
	ContentType string
	Poll        *MeetingPollGetPoll
	StatusCode  int64
}
