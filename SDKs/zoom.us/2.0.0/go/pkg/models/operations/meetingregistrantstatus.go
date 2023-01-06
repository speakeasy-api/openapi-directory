package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingRegistrantStatusPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingRegistrantStatusQueryParams struct {
	OccurrenceID *string `queryParam:"style=form,explode=true,name=occurrence_id"`
}

type MeetingRegistrantStatusApplicationJSONActionEnum string

const (
	MeetingRegistrantStatusApplicationJSONActionEnumApprove MeetingRegistrantStatusApplicationJSONActionEnum = "approve"
	MeetingRegistrantStatusApplicationJSONActionEnumCancel  MeetingRegistrantStatusApplicationJSONActionEnum = "cancel"
	MeetingRegistrantStatusApplicationJSONActionEnumDeny    MeetingRegistrantStatusApplicationJSONActionEnum = "deny"
)

type MeetingRegistrantStatusApplicationJSONRegistrants struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

type MeetingRegistrantStatusApplicationJSON struct {
	Action      MeetingRegistrantStatusApplicationJSONActionEnum    `json:"action"`
	Registrants []MeetingRegistrantStatusApplicationJSONRegistrants `json:"registrants,omitempty"`
}

type MeetingRegistrantStatusMultipartFormDataActionEnum string

const (
	MeetingRegistrantStatusMultipartFormDataActionEnumApprove MeetingRegistrantStatusMultipartFormDataActionEnum = "approve"
	MeetingRegistrantStatusMultipartFormDataActionEnumCancel  MeetingRegistrantStatusMultipartFormDataActionEnum = "cancel"
	MeetingRegistrantStatusMultipartFormDataActionEnumDeny    MeetingRegistrantStatusMultipartFormDataActionEnum = "deny"
)

type MeetingRegistrantStatusMultipartFormDataRegistrants struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

type MeetingRegistrantStatusMultipartFormData1 struct {
	Action      MeetingRegistrantStatusMultipartFormDataActionEnum    `multipartForm:"name=action"`
	Registrants []MeetingRegistrantStatusMultipartFormDataRegistrants `multipartForm:"name=registrants,json"`
}

type MeetingRegistrantStatusRequests struct {
	Object  *MeetingRegistrantStatusApplicationJSON    `request:"mediaType=application/json"`
	Object1 *MeetingRegistrantStatusMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type MeetingRegistrantStatusSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingRegistrantStatusRequest struct {
	PathParams  MeetingRegistrantStatusPathParams
	QueryParams MeetingRegistrantStatusQueryParams
	Request     MeetingRegistrantStatusRequests
	Security    MeetingRegistrantStatusSecurity
}

type MeetingRegistrantStatusResponse struct {
	ContentType string
	StatusCode  int64
}
