package operations

import (
	"openapi/pkg/models/shared"
)

type SendaChatMessagePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type SendaChatMessageApplicationJSONAtItems struct {
	AtContact     *string `json:"at_contact,omitempty"`
	AtType        *int64  `json:"at_type,omitempty"`
	EndPosition   *int64  `json:"end_position,omitempty"`
	StartPosition *int64  `json:"start_position,omitempty"`
}

type SendaChatMessageApplicationJSON struct {
	AtItems   []SendaChatMessageApplicationJSONAtItems `json:"at_items,omitempty"`
	Message   string                                   `json:"message"`
	ToChannel *string                                  `json:"to_channel,omitempty"`
	ToContact *string                                  `json:"to_contact,omitempty"`
}

type SendaChatMessageMultipartFormDataAtItems struct {
	AtContact     *string `json:"at_contact,omitempty"`
	AtType        *int64  `json:"at_type,omitempty"`
	EndPosition   *int64  `json:"end_position,omitempty"`
	StartPosition *int64  `json:"start_position,omitempty"`
}

type SendaChatMessageMultipartFormData1 struct {
	AtItems   []SendaChatMessageMultipartFormDataAtItems `multipartForm:"name=at_items,json"`
	Message   string                                     `multipartForm:"name=message"`
	ToChannel *string                                    `multipartForm:"name=to_channel"`
	ToContact *string                                    `multipartForm:"name=to_contact"`
}

type SendaChatMessageRequests struct {
	Object  *SendaChatMessageApplicationJSON    `request:"mediaType=application/json"`
	Object1 *SendaChatMessageMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type SendaChatMessageSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type SendaChatMessage201ApplicationJSON struct {
	ID *string `json:"id,omitempty"`
}

type SendaChatMessageRequest struct {
	PathParams SendaChatMessagePathParams
	Request    *SendaChatMessageRequests
	Security   SendaChatMessageSecurity
}

type SendaChatMessageResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	SendaChatMessage201ApplicationJSONObject *SendaChatMessage201ApplicationJSON
}
