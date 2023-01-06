package operations

import (
	"openapi/pkg/models/shared"
)

type UserStatusPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserStatusApplicationJSONActionEnum string

const (
	UserStatusApplicationJSONActionEnumActivate   UserStatusApplicationJSONActionEnum = "activate"
	UserStatusApplicationJSONActionEnumDeactivate UserStatusApplicationJSONActionEnum = "deactivate"
)

// UserStatusApplicationJSON
// The action.
type UserStatusApplicationJSON struct {
	Action UserStatusApplicationJSONActionEnum `json:"action"`
}

type UserStatusMultipartFormDataActionEnum string

const (
	UserStatusMultipartFormDataActionEnumActivate   UserStatusMultipartFormDataActionEnum = "activate"
	UserStatusMultipartFormDataActionEnumDeactivate UserStatusMultipartFormDataActionEnum = "deactivate"
)

// UserStatusMultipartFormData
// The action.
type UserStatusMultipartFormData struct {
	Action UserStatusMultipartFormDataActionEnum `multipartForm:"name=action"`
}

type UserStatusRequests struct {
	Object  *UserStatusApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UserStatusMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UserStatusSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserStatusRequest struct {
	PathParams UserStatusPathParams
	Request    UserStatusRequests
	Security   UserStatusSecurity
}

type UserStatusResponse struct {
	ContentType string
	StatusCode  int64
}
