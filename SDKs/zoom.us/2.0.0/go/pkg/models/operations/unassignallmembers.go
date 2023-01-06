package operations

import (
	"openapi/pkg/models/shared"
)

type UnassignAllMembersPathParams struct {
	CallQueueID string `pathParam:"style=simple,explode=false,name=callQueueId"`
}

type UnassignAllMembersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UnassignAllMembersRequest struct {
	PathParams UnassignAllMembersPathParams
	Security   UnassignAllMembersSecurity
}

type UnassignAllMembersResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	UnassignAllMembers204ApplicationJSONAny *interface{}
}
