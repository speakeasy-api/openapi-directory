package operations

import (
	"openapi/pkg/models/shared"
)

type PutEntityConnectionsDisconnectPathParams struct {
	ConnectionID string `pathParam:"style=simple,explode=false,name=connection-id"`
}

type PutEntityConnectionsDisconnectHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutEntityConnectionsDisconnectRequest struct {
	PathParams PutEntityConnectionsDisconnectPathParams
	Headers    PutEntityConnectionsDisconnectHeaders
}

type PutEntityConnectionsDisconnectResponse struct {
	ContentType                                string
	Headers                                    map[string][]string
	PUTEntityConnectionsDisconnectResponseType *shared.PutEntityConnectionsDisconnectResponseType
	StatusCode                                 int64
}
