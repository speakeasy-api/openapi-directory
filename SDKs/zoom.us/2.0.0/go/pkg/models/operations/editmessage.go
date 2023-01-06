package operations

import (
	"openapi/pkg/models/shared"
)

type EditMessagePathParams struct {
	MessageID string `pathParam:"style=simple,explode=false,name=messageId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type EditMessageApplicationJSON struct {
	Message   *string `json:"message,omitempty"`
	ToChannel *string `json:"to_channel,omitempty"`
	ToContact *string `json:"to_contact,omitempty"`
}

type EditMessageMultipartFormData struct {
	Message   *string `multipartForm:"name=message"`
	ToChannel *string `multipartForm:"name=to_channel"`
	ToContact *string `multipartForm:"name=to_contact"`
}

type EditMessageRequests struct {
	Object  *EditMessageApplicationJSON   `request:"mediaType=application/json"`
	Object1 *EditMessageMultipartFormData `request:"mediaType=multipart/form-data"`
}

type EditMessageSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type EditMessageRequest struct {
	PathParams EditMessagePathParams
	Request    *EditMessageRequests
	Security   EditMessageSecurity
}

type EditMessageResponse struct {
	ContentType string
	StatusCode  int64
}
