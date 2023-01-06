package operations

import (
	"openapi/pkg/models/shared"
)

type WebinarRegistrantStatusPathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

type WebinarRegistrantStatusQueryParams struct {
	OccurrenceID *string `queryParam:"style=form,explode=true,name=occurrence_id"`
}

type WebinarRegistrantStatusApplicationJSONActionEnum string

const (
	WebinarRegistrantStatusApplicationJSONActionEnumApprove WebinarRegistrantStatusApplicationJSONActionEnum = "approve"
	WebinarRegistrantStatusApplicationJSONActionEnumCancel  WebinarRegistrantStatusApplicationJSONActionEnum = "cancel"
	WebinarRegistrantStatusApplicationJSONActionEnumDeny    WebinarRegistrantStatusApplicationJSONActionEnum = "deny"
)

type WebinarRegistrantStatusApplicationJSONRegistrants struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

type WebinarRegistrantStatusApplicationJSON struct {
	Action      WebinarRegistrantStatusApplicationJSONActionEnum    `json:"action"`
	Registrants []WebinarRegistrantStatusApplicationJSONRegistrants `json:"registrants,omitempty"`
}

type WebinarRegistrantStatusMultipartFormDataActionEnum string

const (
	WebinarRegistrantStatusMultipartFormDataActionEnumApprove WebinarRegistrantStatusMultipartFormDataActionEnum = "approve"
	WebinarRegistrantStatusMultipartFormDataActionEnumCancel  WebinarRegistrantStatusMultipartFormDataActionEnum = "cancel"
	WebinarRegistrantStatusMultipartFormDataActionEnumDeny    WebinarRegistrantStatusMultipartFormDataActionEnum = "deny"
)

type WebinarRegistrantStatusMultipartFormDataRegistrants struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

type WebinarRegistrantStatusMultipartFormData1 struct {
	Action      WebinarRegistrantStatusMultipartFormDataActionEnum    `multipartForm:"name=action"`
	Registrants []WebinarRegistrantStatusMultipartFormDataRegistrants `multipartForm:"name=registrants,json"`
}

type WebinarRegistrantStatusRequests struct {
	Object  *WebinarRegistrantStatusApplicationJSON    `request:"mediaType=application/json"`
	Object1 *WebinarRegistrantStatusMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type WebinarRegistrantStatusSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarRegistrantStatusRequest struct {
	PathParams  WebinarRegistrantStatusPathParams
	QueryParams WebinarRegistrantStatusQueryParams
	Request     WebinarRegistrantStatusRequests
	Security    WebinarRegistrantStatusSecurity
}

type WebinarRegistrantStatusResponse struct {
	ContentType string
	StatusCode  int64
}
