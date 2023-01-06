package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingPollsPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingPollsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingPollsPollListPollQuestionsTypeEnum string

const (
	MeetingPollsPollListPollQuestionsTypeEnumSingle   MeetingPollsPollListPollQuestionsTypeEnum = "single"
	MeetingPollsPollListPollQuestionsTypeEnumMultiple MeetingPollsPollListPollQuestionsTypeEnum = "multiple"
)

type MeetingPollsPollListPollQuestions struct {
	Answers []string                                   `json:"answers,omitempty"`
	Name    *string                                    `json:"name,omitempty"`
	Type    *MeetingPollsPollListPollQuestionsTypeEnum `json:"type,omitempty"`
}

// MeetingPollsPollListPoll
// Poll
type MeetingPollsPollListPoll struct {
	Questions []MeetingPollsPollListPollQuestions `json:"questions,omitempty"`
	Title     *string                             `json:"title,omitempty"`
}

// MeetingPollsPollList
// Poll List
type MeetingPollsPollList struct {
	Polls        []MeetingPollsPollListPoll `json:"polls,omitempty"`
	TotalRecords *int64                     `json:"total_records,omitempty"`
}

type MeetingPollsRequest struct {
	PathParams MeetingPollsPathParams
	Security   MeetingPollsSecurity
}

type MeetingPollsResponse struct {
	Body        []byte
	ContentType string
	PollList    *MeetingPollsPollList
	StatusCode  int64
}
