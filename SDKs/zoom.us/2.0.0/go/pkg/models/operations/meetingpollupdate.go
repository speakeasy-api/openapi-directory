package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingPollUpdatePathParams struct {
	MeetingID int64  `pathParam:"style=simple,explode=false,name=meetingId"`
	PollID    string `pathParam:"style=simple,explode=false,name=pollId"`
}

type MeetingPollUpdatePollQuestionsTypeEnum string

const (
	MeetingPollUpdatePollQuestionsTypeEnumSingle   MeetingPollUpdatePollQuestionsTypeEnum = "single"
	MeetingPollUpdatePollQuestionsTypeEnumMultiple MeetingPollUpdatePollQuestionsTypeEnum = "multiple"
)

type MeetingPollUpdatePollQuestions struct {
	Answers []string                                `json:"answers,omitempty"`
	Name    *string                                 `json:"name,omitempty"`
	Type    *MeetingPollUpdatePollQuestionsTypeEnum `json:"type,omitempty"`
}

// MeetingPollUpdatePoll
// Poll
type MeetingPollUpdatePoll struct {
	Questions []MeetingPollUpdatePollQuestions `json:"questions,omitempty" multipartForm:"name=questions,json"`
	Title     *string                          `json:"title,omitempty" multipartForm:"name=title"`
}

type MeetingPollUpdateRequests struct {
	Poll  *MeetingPollUpdatePoll `request:"mediaType=application/json"`
	Poll1 *MeetingPollUpdatePoll `request:"mediaType=multipart/form-data"`
}

type MeetingPollUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingPollUpdateRequest struct {
	PathParams MeetingPollUpdatePathParams
	Request    MeetingPollUpdateRequests
	Security   MeetingPollUpdateSecurity
}

type MeetingPollUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
