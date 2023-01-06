package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type EditChatbotMessagePathParams struct {
	MessageID string `pathParam:"style=simple,explode=false,name=message_id"`
}

type EditChatbotMessageApplicationJSON struct {
	AccountID         string                 `json:"account_id"`
	Content           map[string]interface{} `json:"content"`
	IsMarkdownSupport *bool                  `json:"is_markdown_support,omitempty"`
	RobotJid          string                 `json:"robot_jid"`
	UserJid           *string                `json:"user_jid,omitempty"`
}

type EditChatbotMessageMultipartFormData struct {
	AccountID         string                 `multipartForm:"name=account_id"`
	Content           map[string]interface{} `multipartForm:"name=content,json"`
	IsMarkdownSupport *bool                  `multipartForm:"name=is_markdown_support"`
	RobotJid          string                 `multipartForm:"name=robot_jid"`
	UserJid           *string                `multipartForm:"name=user_jid"`
}

type EditChatbotMessageRequests struct {
	Object  *EditChatbotMessageApplicationJSON   `request:"mediaType=application/json"`
	Object1 *EditChatbotMessageMultipartFormData `request:"mediaType=multipart/form-data"`
}

type EditChatbotMessageSecurity struct {
	ClientCredentials shared.SchemeClientCredentials `security:"scheme,type=oauth2"`
}

type EditChatbotMessage200ApplicationJSON struct {
	MessageID *string    `json:"message_id,omitempty"`
	RobotJid  *string    `json:"robot_jid,omitempty"`
	SentTime  *time.Time `json:"sent_time,omitempty"`
	ToJid     *string    `json:"to_jid,omitempty"`
	UserJid   *string    `json:"user_jid,omitempty"`
}

type EditChatbotMessageRequest struct {
	PathParams EditChatbotMessagePathParams
	Request    *EditChatbotMessageRequests
	Security   EditChatbotMessageSecurity
}

type EditChatbotMessageResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	EditChatbotMessage200ApplicationJSONObject *EditChatbotMessage200ApplicationJSON
}
