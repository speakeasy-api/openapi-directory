package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeCallQueueManagerPathParams struct {
	CallQueueID string `pathParam:"style=simple,explode=false,name=callQueueId"`
}

type ChangeCallQueueManagerApplicationJSON struct {
	MemberID *string `json:"member_id,omitempty"`
}

type ChangeCallQueueManagerMultipartFormData struct {
	MemberID *string `multipartForm:"name=member_id"`
}

type ChangeCallQueueManagerRequests struct {
	Object  *ChangeCallQueueManagerApplicationJSON   `request:"mediaType=application/json"`
	Object1 *ChangeCallQueueManagerMultipartFormData `request:"mediaType=multipart/form-data"`
}

type ChangeCallQueueManagerSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ChangeCallQueueManagerRequest struct {
	PathParams ChangeCallQueueManagerPathParams
	Request    *ChangeCallQueueManagerRequests
	Security   ChangeCallQueueManagerSecurity
}

type ChangeCallQueueManagerResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	ChangeCallQueueManager204ApplicationJSONAny *interface{}
}
