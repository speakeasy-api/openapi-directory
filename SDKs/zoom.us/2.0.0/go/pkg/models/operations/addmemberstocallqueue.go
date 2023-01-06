package operations

import (
	"openapi/pkg/models/shared"
)

type AddMembersToCallQueuePathParams struct {
	CallQueueID string `pathParam:"style=simple,explode=false,name=callQueueId"`
}

type AddMembersToCallQueueApplicationJSONMembersUsers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

// AddMembersToCallQueueApplicationJSONMembers
// A maximum of 10 members can be added at a time.
type AddMembersToCallQueueApplicationJSONMembers struct {
	CommonAreaPhoneIds []string                                           `json:"common_area_phone_ids,omitempty"`
	Users              []AddMembersToCallQueueApplicationJSONMembersUsers `json:"users,omitempty"`
}

type AddMembersToCallQueueApplicationJSON struct {
	Members *AddMembersToCallQueueApplicationJSONMembers `json:"members,omitempty"`
}

type AddMembersToCallQueueMultipartFormDataMembersUsers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

// AddMembersToCallQueueMultipartFormDataMembers
// A maximum of 10 members can be added at a time.
type AddMembersToCallQueueMultipartFormDataMembers struct {
	CommonAreaPhoneIds []string                                             `json:"common_area_phone_ids,omitempty"`
	Users              []AddMembersToCallQueueMultipartFormDataMembersUsers `json:"users,omitempty"`
}

type AddMembersToCallQueueMultipartFormData struct {
	Members *AddMembersToCallQueueMultipartFormDataMembers `multipartForm:"name=members,json"`
}

type AddMembersToCallQueueRequests struct {
	Object  *AddMembersToCallQueueApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AddMembersToCallQueueMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AddMembersToCallQueueSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AddMembersToCallQueueRequest struct {
	PathParams AddMembersToCallQueuePathParams
	Request    *AddMembersToCallQueueRequests
	Security   AddMembersToCallQueueSecurity
}

type AddMembersToCallQueueResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	AddMembersToCallQueue201ApplicationJSONObject map[string]interface{}
}
