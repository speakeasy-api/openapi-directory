package operations

import (
	"openapi/pkg/models/shared"
)

type GroupCreateApplicationJSON struct {
	Name *string `json:"name,omitempty"`
}

type GroupCreateMultipartFormData struct {
	Name *string `multipartForm:"name=name"`
}

type GroupCreateRequests struct {
	Object  *GroupCreateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *GroupCreateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type GroupCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GroupCreate201ApplicationJSON struct {
	ID           *string `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
	TotalMembers *int64  `json:"total_members,omitempty"`
}

type GroupCreateRequest struct {
	Request  GroupCreateRequests
	Security GroupCreateSecurity
}

type GroupCreateResponse struct {
	Body                                []byte
	ContentType                         string
	Headers                             map[string][]string
	StatusCode                          int64
	GroupCreate201ApplicationJSONObject *GroupCreate201ApplicationJSON
}
