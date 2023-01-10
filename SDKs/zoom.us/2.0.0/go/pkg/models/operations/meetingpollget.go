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

type MeetingPollGetPollStatusEnum string

const (
	MeetingPollGetPollStatusEnumNotstart MeetingPollGetPollStatusEnum = "notstart"
	MeetingPollGetPollStatusEnumStarted  MeetingPollGetPollStatusEnum = "started"
	MeetingPollGetPollStatusEnumEnded    MeetingPollGetPollStatusEnum = "ended"
	MeetingPollGetPollStatusEnumSharing  MeetingPollGetPollStatusEnum = "sharing"
)

// MeetingPollGetPoll
// Poll
type MeetingPollGetPoll struct {
	ID        *string                       `json:"id,omitempty"`
	Questions []MeetingPollGetPollQuestions `json:"questions,omitempty"`
	Status    *MeetingPollGetPollStatusEnum `json:"status,omitempty"`
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
