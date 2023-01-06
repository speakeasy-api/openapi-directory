package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCallQueueApplicationJSONMembersUsers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

// CreateCallQueueApplicationJSONMembers
// A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
type CreateCallQueueApplicationJSONMembers struct {
	CommonAreaPhoneIds []string                                     `json:"common_area_phone_ids,omitempty"`
	Users              []CreateCallQueueApplicationJSONMembersUsers `json:"users,omitempty"`
}

type CreateCallQueueApplicationJSON struct {
	Description     *string                                `json:"description,omitempty"`
	ExtensionNumber *int64                                 `json:"extension_number,omitempty"`
	Members         *CreateCallQueueApplicationJSONMembers `json:"members,omitempty"`
	Name            string                                 `json:"name"`
	SiteID          string                                 `json:"site_id"`
}

type CreateCallQueueMultipartFormDataMembersUsers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

// CreateCallQueueMultipartFormDataMembers
// A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
type CreateCallQueueMultipartFormDataMembers struct {
	CommonAreaPhoneIds []string                                       `json:"common_area_phone_ids,omitempty"`
	Users              []CreateCallQueueMultipartFormDataMembersUsers `json:"users,omitempty"`
}

type CreateCallQueueMultipartFormData struct {
	Description     *string                                  `multipartForm:"name=description"`
	ExtensionNumber *int64                                   `multipartForm:"name=extension_number"`
	Members         *CreateCallQueueMultipartFormDataMembers `multipartForm:"name=members,json"`
	Name            string                                   `multipartForm:"name=name"`
	SiteID          string                                   `multipartForm:"name=site_id"`
}

type CreateCallQueueRequests struct {
	Object  *CreateCallQueueApplicationJSON   `request:"mediaType=application/json"`
	Object1 *CreateCallQueueMultipartFormData `request:"mediaType=multipart/form-data"`
}

type CreateCallQueueSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type CreateCallQueue201ApplicationJSON struct {
	ExtensionNumber *int64  `json:"extension_number,omitempty"`
	ID              *string `json:"id,omitempty"`
	Name            *string `json:"name,omitempty"`
	Status          *string `json:"status,omitempty"`
}

type CreateCallQueueRequest struct {
	Request  *CreateCallQueueRequests
	Security CreateCallQueueSecurity
}

type CreateCallQueueResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	CreateCallQueue201ApplicationJSONObject *CreateCallQueue201ApplicationJSON
}
