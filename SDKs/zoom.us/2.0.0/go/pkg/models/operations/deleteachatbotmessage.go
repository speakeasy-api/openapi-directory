package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAChatbotMessagePathParams struct {
	MessageID string `pathParam:"style=simple,explode=false,name=message_id"`
}

type DeleteAChatbotMessageApplicationJSON struct {
	AccountID string  `json:"account_id"`
	RobotJid  string  `json:"robot_jid"`
	UserJid   *string `json:"user_jid,omitempty"`
}

type DeleteAChatbotMessageMultipartFormData struct {
	AccountID string  `multipartForm:"name=account_id"`
	RobotJid  string  `multipartForm:"name=robot_jid"`
	UserJid   *string `multipartForm:"name=user_jid"`
}

type DeleteAChatbotMessageRequests struct {
	Object  *DeleteAChatbotMessageApplicationJSON   `request:"mediaType=application/json"`
	Object1 *DeleteAChatbotMessageMultipartFormData `request:"mediaType=multipart/form-data"`
}

type DeleteAChatbotMessageSecurity struct {
	ClientCredentials shared.SchemeClientCredentials `security:"scheme,type=oauth2"`
}

type DeleteAChatbotMessage200ApplicationJSON struct {
	MessageID *string `json:"message_id,omitempty"`
	RobotJid  *string `json:"robot_jid,omitempty"`
	SentTime  *string `json:"sent_time,omitempty"`
	ToJid     *string `json:"to_jid,omitempty"`
	UserJid   *string `json:"user_jid,omitempty"`
}

type DeleteAChatbotMessageRequest struct {
	PathParams DeleteAChatbotMessagePathParams
	Request    *DeleteAChatbotMessageRequests
	Security   DeleteAChatbotMessageSecurity
}

type DeleteAChatbotMessageResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	DeleteAChatbotMessage200ApplicationJSONObject *DeleteAChatbotMessage200ApplicationJSON
}
