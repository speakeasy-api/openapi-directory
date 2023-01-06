package operations

import (
	"openapi/pkg/models/shared"
)

type SendchatbotApplicationJSON struct {
	AccountID         string                 `json:"account_id"`
	Content           map[string]interface{} `json:"content"`
	IsMarkdownSupport *bool                  `json:"is_markdown_support,omitempty"`
	RobotJid          string                 `json:"robot_jid"`
	ToJid             string                 `json:"to_jid"`
	UserJid           *string                `json:"user_jid,omitempty"`
	VisibleToUser     *string                `json:"visible_to_user,omitempty"`
}

type SendchatbotMultipartFormData struct {
	AccountID         string                 `multipartForm:"name=account_id"`
	Content           map[string]interface{} `multipartForm:"name=content,json"`
	IsMarkdownSupport *bool                  `multipartForm:"name=is_markdown_support"`
	RobotJid          string                 `multipartForm:"name=robot_jid"`
	ToJid             string                 `multipartForm:"name=to_jid"`
	UserJid           *string                `multipartForm:"name=user_jid"`
	VisibleToUser     *string                `multipartForm:"name=visible_to_user"`
}

type SendchatbotRequests struct {
	Object  *SendchatbotApplicationJSON   `request:"mediaType=application/json"`
	Object1 *SendchatbotMultipartFormData `request:"mediaType=multipart/form-data"`
}

type SendchatbotSecurity struct {
	ClientCredentials shared.SchemeClientCredentials `security:"scheme,type=oauth2"`
}

type SendchatbotRequest struct {
	Request  *SendchatbotRequests
	Security SendchatbotSecurity
}

type SendchatbotResponse struct {
	ContentType string
	StatusCode  int64
}
