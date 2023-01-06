package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingStatusPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingStatusApplicationJSONActionEnum string

const (
	MeetingStatusApplicationJSONActionEnumEnd     MeetingStatusApplicationJSONActionEnum = "end"
	MeetingStatusApplicationJSONActionEnumRecover MeetingStatusApplicationJSONActionEnum = "recover"
)

type MeetingStatusApplicationJSON struct {
	Action *MeetingStatusApplicationJSONActionEnum `json:"action,omitempty"`
}

type MeetingStatusMultipartFormDataActionEnum string

const (
	MeetingStatusMultipartFormDataActionEnumEnd     MeetingStatusMultipartFormDataActionEnum = "end"
	MeetingStatusMultipartFormDataActionEnumRecover MeetingStatusMultipartFormDataActionEnum = "recover"
)

type MeetingStatusMultipartFormData struct {
	Action *MeetingStatusMultipartFormDataActionEnum `multipartForm:"name=action"`
}

type MeetingStatusRequests struct {
	Object  *MeetingStatusApplicationJSON   `request:"mediaType=application/json"`
	Object1 *MeetingStatusMultipartFormData `request:"mediaType=multipart/form-data"`
}

type MeetingStatusSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingStatusRequest struct {
	PathParams MeetingStatusPathParams
	Request    MeetingStatusRequests
	Security   MeetingStatusSecurity
}

type MeetingStatusResponse struct {
	ContentType string
	StatusCode  int64
}
