package operations

import (
	"openapi/pkg/models/shared"
)

type PutEntityConnectionsAcceptPathParams struct {
	ConnectionID string `pathParam:"style=simple,explode=false,name=connection-id"`
}

type PutEntityConnectionsAcceptHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutEntityConnectionsAcceptRequest struct {
	PathParams PutEntityConnectionsAcceptPathParams
	Headers    PutEntityConnectionsAcceptHeaders
}

type PutEntityConnectionsAcceptResponse struct {
	ContentType                            string
	Headers                                map[string][]string
	PUTEntityConnectionsAcceptResponseType *shared.PutEntityConnectionsAcceptResponseType
	StatusCode                             int64
}
