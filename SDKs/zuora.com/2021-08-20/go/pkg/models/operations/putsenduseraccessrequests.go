package operations

import (
	"openapi/pkg/models/shared"
)

type PutSendUserAccessRequestsPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PutSendUserAccessRequestsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutSendUserAccessRequestsRequest struct {
	PathParams PutSendUserAccessRequestsPathParams
	Headers    PutSendUserAccessRequestsHeaders
	Request    shared.PutSendUserAccessRequestType `request:"mediaType=application/json"`
}

type PutSendUserAccessRequestsResponse struct {
	ContentType                          string
	Headers                              map[string][]string
	PUTSendUserAccessRequestResponseType *shared.PutSendUserAccessRequestResponseType
	StatusCode                           int64
}
