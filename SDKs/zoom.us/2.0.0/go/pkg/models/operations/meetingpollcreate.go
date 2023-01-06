package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingPollCreatePathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingPollCreatePollQuestionsTypeEnum string

const (
	MeetingPollCreatePollQuestionsTypeEnumSingle   MeetingPollCreatePollQuestionsTypeEnum = "single"
	MeetingPollCreatePollQuestionsTypeEnumMultiple MeetingPollCreatePollQuestionsTypeEnum = "multiple"
)

type MeetingPollCreatePollQuestions struct {
	Answers []string                                `json:"answers,omitempty"`
	Name    *string                                 `json:"name,omitempty"`
	Type    *MeetingPollCreatePollQuestionsTypeEnum `json:"type,omitempty"`
}

// MeetingPollCreatePoll
// Poll
type MeetingPollCreatePoll struct {
	Questions []MeetingPollCreatePollQuestions `json:"questions,omitempty" multipartForm:"name=questions,json"`
	Title     *string                          `json:"title,omitempty" multipartForm:"name=title"`
}

type MeetingPollCreateRequests struct {
	Poll  *MeetingPollCreatePoll `request:"mediaType=application/json"`
	Poll1 *MeetingPollCreatePoll `request:"mediaType=multipart/form-data"`
}

type MeetingPollCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingPollCreateRequest struct {
	PathParams MeetingPollCreatePathParams
	Request    MeetingPollCreateRequests
	Security   MeetingPollCreateSecurity
}

type MeetingPollCreateResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	Poll        *MeetingPollCreatePoll
	StatusCode  int64
}
