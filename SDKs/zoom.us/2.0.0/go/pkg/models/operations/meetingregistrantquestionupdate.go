package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingRegistrantQuestionUpdatePathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum string

const (
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnumShort  MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum = "short"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnumSingle MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum = "single"
)

type MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions struct {
	Answers  []string                                                                          `json:"answers,omitempty"`
	Required *bool                                                                             `json:"required,omitempty"`
	Title    *string                                                                           `json:"title,omitempty"`
	Type     *MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum `json:"type,omitempty"`
}

type MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum string

const (
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumAddress               MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "address"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumCity                  MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "city"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumCountry               MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "country"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumZip                   MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "zip"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumState                 MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "state"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumPhone                 MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "phone"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumIndustry              MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "industry"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumOrg                   MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "org"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumJobTitle              MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "job_title"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumPurchasingTimeFrame   MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "purchasing_time_frame"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumRoleInPurchaseProcess MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "role_in_purchase_process"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumNoOfEmployees         MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "no_of_employees"
	MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnumComments              MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = "comments"
)

type MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions struct {
	FieldName *MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum `json:"field_name,omitempty"`
	Required  *bool                                                                            `json:"required,omitempty"`
}

// MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions
// Meeting Registrant Questions
type MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions struct {
	CustomQuestions []MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions `json:"custom_questions,omitempty" multipartForm:"name=custom_questions,json"`
	Questions       []MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions       `json:"questions,omitempty" multipartForm:"name=questions,json"`
}

type MeetingRegistrantQuestionUpdateRequests struct {
	MeetingRegistrantQuestions  *MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions `request:"mediaType=application/json"`
	MeetingRegistrantQuestions1 *MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions `request:"mediaType=multipart/form-data"`
}

type MeetingRegistrantQuestionUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingRegistrantQuestionUpdateRequest struct {
	PathParams MeetingRegistrantQuestionUpdatePathParams
	Request    MeetingRegistrantQuestionUpdateRequests
	Security   MeetingRegistrantQuestionUpdateSecurity
}

type MeetingRegistrantQuestionUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
