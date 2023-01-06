package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingRecordingRegistrantStatusPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingRecordingRegistrantStatusApplicationJSONActionEnum string

const (
	MeetingRecordingRegistrantStatusApplicationJSONActionEnumApprove MeetingRecordingRegistrantStatusApplicationJSONActionEnum = "approve"
	MeetingRecordingRegistrantStatusApplicationJSONActionEnumDeny    MeetingRecordingRegistrantStatusApplicationJSONActionEnum = "deny"
)

// MeetingRecordingRegistrantStatusApplicationJSON
// Registrant Status
type MeetingRecordingRegistrantStatusApplicationJSON struct {
	Action      MeetingRecordingRegistrantStatusApplicationJSONActionEnum `json:"action"`
	Registrants []interface{}                                             `json:"registrants,omitempty"`
}

type MeetingRecordingRegistrantStatusMultipartFormDataActionEnum string

const (
	MeetingRecordingRegistrantStatusMultipartFormDataActionEnumApprove MeetingRecordingRegistrantStatusMultipartFormDataActionEnum = "approve"
	MeetingRecordingRegistrantStatusMultipartFormDataActionEnumDeny    MeetingRecordingRegistrantStatusMultipartFormDataActionEnum = "deny"
)

// MeetingRecordingRegistrantStatusMultipartFormData
// Registrant Status
type MeetingRecordingRegistrantStatusMultipartFormData struct {
	Action      MeetingRecordingRegistrantStatusMultipartFormDataActionEnum `multipartForm:"name=action"`
	Registrants []interface{}                                               `multipartForm:"name=registrants,json"`
}

type MeetingRecordingRegistrantStatusRequests struct {
	Object  *MeetingRecordingRegistrantStatusApplicationJSON   `request:"mediaType=application/json"`
	Object1 *MeetingRecordingRegistrantStatusMultipartFormData `request:"mediaType=multipart/form-data"`
}

type MeetingRecordingRegistrantStatusSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingRecordingRegistrantStatusRequest struct {
	PathParams MeetingRecordingRegistrantStatusPathParams
	Request    MeetingRecordingRegistrantStatusRequests
	Security   MeetingRecordingRegistrantStatusSecurity
}

type MeetingRecordingRegistrantStatusResponse struct {
	ContentType string
	StatusCode  int64
}
