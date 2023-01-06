package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteChatMessagePathParams struct {
	MessageID string `pathParam:"style=simple,explode=false,name=messageId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteChatMessageQueryParams struct {
	ToChannel *string `queryParam:"style=form,explode=true,name=to_channel"`
	ToContact *string `queryParam:"style=form,explode=true,name=to_contact"`
}

type DeleteChatMessageSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeleteChatMessageRequest struct {
	PathParams  DeleteChatMessagePathParams
	QueryParams DeleteChatMessageQueryParams
	Security    DeleteChatMessageSecurity
}

type DeleteChatMessageResponse struct {
	ContentType string
	StatusCode  int64
}
