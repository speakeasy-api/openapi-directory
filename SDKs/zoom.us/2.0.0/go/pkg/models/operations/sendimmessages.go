package operations

import (
	"openapi/pkg/models/shared"
)

type SendimmessagesQueryParams struct {
	ChatUser *string `queryParam:"style=form,explode=true,name=chat_user"`
}

type SendimmessagesApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type SendimmessagesMultipartFormData struct {
	Message *string `multipartForm:"name=message"`
}

type SendimmessagesRequests struct {
	Object  *SendimmessagesApplicationJSON   `request:"mediaType=application/json"`
	Object1 *SendimmessagesMultipartFormData `request:"mediaType=multipart/form-data"`
}

type SendimmessagesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type Sendimmessages201ApplicationJSON struct {
	ID *string `json:"id,omitempty"`
}

type SendimmessagesRequest struct {
	QueryParams SendimmessagesQueryParams
	Request     *SendimmessagesRequests
	Security    SendimmessagesSecurity
}

type SendimmessagesResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	Sendimmessages201ApplicationJSONObject *Sendimmessages201ApplicationJSON
}
