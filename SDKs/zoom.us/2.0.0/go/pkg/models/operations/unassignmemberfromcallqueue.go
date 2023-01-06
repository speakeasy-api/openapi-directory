package operations

import (
	"openapi/pkg/models/shared"
)

type UnassignMemberFromCallQueuePathParams struct {
	CallQueueID string `pathParam:"style=simple,explode=false,name=callQueueId"`
	MemberID    string `pathParam:"style=simple,explode=false,name=memberId"`
}

type UnassignMemberFromCallQueueSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UnassignMemberFromCallQueueRequest struct {
	PathParams UnassignMemberFromCallQueuePathParams
	Security   UnassignMemberFromCallQueueSecurity
}

type UnassignMemberFromCallQueueResponse struct {
	Body                                             []byte
	ContentType                                      string
	StatusCode                                       int64
	UnassignMemberFromCallQueue204ApplicationJSONAny *interface{}
}
