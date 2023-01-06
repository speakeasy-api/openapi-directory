package operations

import (
	"openapi/pkg/models/shared"
)

type UserCreateApplicationJSONActionEnum string

const (
	UserCreateApplicationJSONActionEnumCreate     UserCreateApplicationJSONActionEnum = "create"
	UserCreateApplicationJSONActionEnumAutoCreate UserCreateApplicationJSONActionEnum = "autoCreate"
	UserCreateApplicationJSONActionEnumCustCreate UserCreateApplicationJSONActionEnum = "custCreate"
	UserCreateApplicationJSONActionEnumSsoCreate  UserCreateApplicationJSONActionEnum = "ssoCreate"
)

type UserCreateApplicationJSONUserInfo struct {
	Email     string  `json:"email"`
	FirstName *string `json:"first_name,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
	Password  *string `json:"password,omitempty"`
	Type      int64   `json:"type"`
}

type UserCreateApplicationJSON struct {
	Action   UserCreateApplicationJSONActionEnum `json:"action"`
	UserInfo *UserCreateApplicationJSONUserInfo  `json:"user_info,omitempty"`
}

type UserCreateMultipartFormDataActionEnum string

const (
	UserCreateMultipartFormDataActionEnumCreate     UserCreateMultipartFormDataActionEnum = "create"
	UserCreateMultipartFormDataActionEnumAutoCreate UserCreateMultipartFormDataActionEnum = "autoCreate"
	UserCreateMultipartFormDataActionEnumCustCreate UserCreateMultipartFormDataActionEnum = "custCreate"
	UserCreateMultipartFormDataActionEnumSsoCreate  UserCreateMultipartFormDataActionEnum = "ssoCreate"
)

type UserCreateMultipartFormDataUserInfo struct {
	Email     string  `json:"email"`
	FirstName *string `json:"first_name,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
	Password  *string `json:"password,omitempty"`
	Type      int64   `json:"type"`
}

type UserCreateMultipartFormData struct {
	Action   UserCreateMultipartFormDataActionEnum `multipartForm:"name=action"`
	UserInfo *UserCreateMultipartFormDataUserInfo  `multipartForm:"name=user_info,json"`
}

type UserCreateRequests struct {
	Object  *UserCreateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UserCreateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UserCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserCreate201ApplicationJSON struct {
	Email     *string `json:"email,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	ID        *string `json:"id,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
	Type      *int64  `json:"type,omitempty"`
}

type UserCreateRequest struct {
	Request  UserCreateRequests
	Security UserCreateSecurity
}

type UserCreateResponse struct {
	Body                               []byte
	ContentType                        string
	Headers                            map[string][]string
	StatusCode                         int64
	UserCreate201ApplicationJSONObject *UserCreate201ApplicationJSON
}
