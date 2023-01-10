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

type MeetingPollsPollListPollStatusEnum string

const (
	MeetingPollsPollListPollStatusEnumNotstart MeetingPollsPollListPollStatusEnum = "notstart"
	MeetingPollsPollListPollStatusEnumStarted  MeetingPollsPollListPollStatusEnum = "started"
	MeetingPollsPollListPollStatusEnumEnded    MeetingPollsPollListPollStatusEnum = "ended"
	MeetingPollsPollListPollStatusEnumSharing  MeetingPollsPollListPollStatusEnum = "sharing"
)

// MeetingPollsPollListPoll
// Poll
type MeetingPollsPollListPoll struct {
	ID        *string                             `json:"id,omitempty"`
	Questions []MeetingPollsPollListPollQuestions `json:"questions,omitempty"`
	Status    *MeetingPollsPollListPollStatusEnum `json:"status,omitempty"`
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
