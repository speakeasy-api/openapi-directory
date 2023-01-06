package operations

import (
	"openapi/pkg/models/shared"
)

type CreateChannelPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type CreateChannelApplicationJSONMembers struct {
	Email string `json:"email"`
}

type CreateChannelApplicationJSON struct {
	Members []CreateChannelApplicationJSONMembers `json:"members,omitempty"`
	Name    *string                               `json:"name,omitempty"`
	Type    *int64                                `json:"type,omitempty"`
}

type CreateChannelMultipartFormDataMembers struct {
	Email string `json:"email"`
}

type CreateChannelMultipartFormData1 struct {
	Members []CreateChannelMultipartFormDataMembers `multipartForm:"name=members,json"`
	Name    *string                                 `multipartForm:"name=name"`
	Type    *int64                                  `multipartForm:"name=type"`
}

type CreateChannelRequests struct {
	Object  *CreateChannelApplicationJSON    `request:"mediaType=application/json"`
	Object1 *CreateChannelMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type CreateChannelSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type CreateChannel201ApplicationJSON struct {
	ID   *string `json:"id,omitempty"`
	Jid  *string `json:"jid,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *int64  `json:"type,omitempty"`
}

type CreateChannelRequest struct {
	PathParams CreateChannelPathParams
	Request    *CreateChannelRequests
	Security   CreateChannelSecurity
}

type CreateChannelResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	CreateChannel201ApplicationJSONObject *CreateChannel201ApplicationJSON
}
