package operations

import (
	"openapi/pkg/models/shared"
)

type RecordingRegistrantQuestionUpdatePathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum string

const (
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnumShort    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum = "short"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnumSingle   RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum = "single"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnumMultiple RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum = "multiple"
)

type RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions struct {
	Answers  []string                                                                              `json:"answers,omitempty"`
	Required *bool                                                                                 `json:"required,omitempty"`
	Title    *string                                                                               `json:"title,omitempty"`
	Type     *RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum `json:"type,omitempty"`
}

type RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum string

const (
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumLastName              RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "last_name"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumAddress               RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "address"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumCity                  RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "city"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumCountry               RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "country"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumZip                   RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "zip"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumState                 RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "state"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumPhone                 RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "phone"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumIndustry              RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "industry"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumOrg                   RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "org"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumJobTitle              RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "job_title"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumPurchasingTimeFrame   RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "purchasing_time_frame"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumRoleInPurchaseProcess RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "role_in_purchase_process"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumNoOfEmployees         RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "no_of_employees"
	RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnumComments              RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = "comments"
)

type RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions struct {
	FieldName *RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum `json:"field_name,omitempty"`
	Required  *bool                                                                                `json:"required,omitempty"`
}

// RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions
// Recording Registrant Questions
type RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions struct {
	CustomQuestions []RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions `json:"custom_questions,omitempty" multipartForm:"name=custom_questions,json"`
	Questions       []RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions       `json:"questions,omitempty" multipartForm:"name=questions,json"`
}

type RecordingRegistrantQuestionUpdateRequests struct {
	RecordingRegistrantQuestions  *RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions `request:"mediaType=application/json"`
	RecordingRegistrantQuestions1 *RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions `request:"mediaType=multipart/form-data"`
}

type RecordingRegistrantQuestionUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RecordingRegistrantQuestionUpdateRequest struct {
	PathParams RecordingRegistrantQuestionUpdatePathParams
	Request    RecordingRegistrantQuestionUpdateRequests
	Security   RecordingRegistrantQuestionUpdateSecurity
}

type RecordingRegistrantQuestionUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
