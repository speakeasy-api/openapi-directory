package operations

import (
	"openapi/pkg/models/shared"
)

type PutEntityConnectionsDenyPathParams struct {
	ConnectionID string `pathParam:"style=simple,explode=false,name=connection-id"`
}

type PutEntityConnectionsDenyHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutEntityConnectionsDenyRequest struct {
	PathParams PutEntityConnectionsDenyPathParams
	Headers    PutEntityConnectionsDenyHeaders
}

type PutEntityConnectionsDenyResponse struct {
	ContentType                          string
	Headers                              map[string][]string
	PUTEntityConnectionsDenyResponseType *shared.PutEntityConnectionsDenyResponseType
	StatusCode                           int64
}
