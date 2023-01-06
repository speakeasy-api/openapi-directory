package operations

import (
	"openapi/pkg/models/shared"
)

type RecordingRegistrantsQuestionsGetPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type RecordingRegistrantsQuestionsGetSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum string

const (
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnumShort    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum = "short"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnumSingle   RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum = "single"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnumMultiple RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum = "multiple"
)

type RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions struct {
	Answers  []string                                                                             `json:"answers,omitempty"`
	Required *bool                                                                                `json:"required,omitempty"`
	Title    *string                                                                              `json:"title,omitempty"`
	Type     *RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum `json:"type,omitempty"`
}

type RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum string

const (
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumLastName              RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "last_name"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumAddress               RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "address"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumCity                  RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "city"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumCountry               RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "country"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumZip                   RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "zip"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumState                 RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "state"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumPhone                 RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "phone"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumIndustry              RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "industry"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumOrg                   RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "org"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumJobTitle              RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "job_title"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumPurchasingTimeFrame   RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "purchasing_time_frame"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumRoleInPurchaseProcess RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "role_in_purchase_process"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumNoOfEmployees         RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "no_of_employees"
	RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnumComments              RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = "comments"
)

type RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions struct {
	FieldName *RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum `json:"field_name,omitempty"`
	Required  *bool                                                                               `json:"required,omitempty"`
}

// RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions
// Recording Registrant Questions
type RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions struct {
	CustomQuestions []RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions `json:"custom_questions,omitempty"`
	Questions       []RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions       `json:"questions,omitempty"`
}

type RecordingRegistrantsQuestionsGetRequest struct {
	PathParams RecordingRegistrantsQuestionsGetPathParams
	Security   RecordingRegistrantsQuestionsGetSecurity
}

type RecordingRegistrantsQuestionsGetResponse struct {
	Body                         []byte
	ContentType                  string
	RecordingRegistrantQuestions *RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions
	StatusCode                   int64
}
