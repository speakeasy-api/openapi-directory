package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingRegistrantsQuestionsGetPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingRegistrantsQuestionsGetSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum string

const (
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnumShort  MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum = "short"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnumSingle MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum = "single"
)

type MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions struct {
	Answers  []string                                                                         `json:"answers,omitempty"`
	Required *bool                                                                            `json:"required,omitempty"`
	Title    *string                                                                          `json:"title,omitempty"`
	Type     *MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum `json:"type,omitempty"`
}

type MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum string

const (
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumAddress               MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "address"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumCity                  MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "city"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumCountry               MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "country"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumZip                   MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "zip"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumState                 MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "state"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumPhone                 MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "phone"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumIndustry              MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "industry"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumOrg                   MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "org"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumJobTitle              MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "job_title"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumPurchasingTimeFrame   MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "purchasing_time_frame"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumRoleInPurchaseProcess MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "role_in_purchase_process"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumNoOfEmployees         MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "no_of_employees"
	MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnumComments              MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = "comments"
)

type MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions struct {
	FieldName *MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum `json:"field_name,omitempty"`
	Required  *bool                                                                           `json:"required,omitempty"`
}

// MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions
// Meeting Registrant Questions
type MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions struct {
	CustomQuestions []MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions `json:"custom_questions,omitempty"`
	Questions       []MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions       `json:"questions,omitempty"`
}

type MeetingRegistrantsQuestionsGetRequest struct {
	PathParams MeetingRegistrantsQuestionsGetPathParams
	Security   MeetingRegistrantsQuestionsGetSecurity
}

type MeetingRegistrantsQuestionsGetResponse struct {
	Body                       []byte
	ContentType                string
	MeetingRegistrantQuestions *MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions
	StatusCode                 int64
}
