package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteACallQueuePathParams struct {
	CallQueueID string `pathParam:"style=simple,explode=false,name=callQueueId"`
}

type DeleteACallQueueSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeleteACallQueueRequest struct {
	PathParams DeleteACallQueuePathParams
	Security   DeleteACallQueueSecurity
}

type DeleteACallQueueResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	DeleteACallQueue204ApplicationJSONAny *interface{}
}
