package operations

import (
	"openapi/pkg/models/shared"
)

type ImGroupMembersCreatePathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type ImGroupMembersCreateApplicationJSONMembers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

type ImGroupMembersCreateApplicationJSON struct {
	Members []ImGroupMembersCreateApplicationJSONMembers `json:"members,omitempty"`
}

type ImGroupMembersCreateMultipartFormDataMembers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

type ImGroupMembersCreateMultipartFormData1 struct {
	Members []ImGroupMembersCreateMultipartFormDataMembers `multipartForm:"name=members,json"`
}

type ImGroupMembersCreateRequests struct {
	Object  *ImGroupMembersCreateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *ImGroupMembersCreateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type ImGroupMembersCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ImGroupMembersCreateRequest struct {
	PathParams ImGroupMembersCreatePathParams
	Request    ImGroupMembersCreateRequests
	Security   ImGroupMembersCreateSecurity
}

type ImGroupMembersCreateResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	ImGroupMembersCreate201ApplicationJSONAny *interface{}
}
