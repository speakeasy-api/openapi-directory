package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntityByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEntityByIDHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetEntityByIDRequest struct {
	PathParams GetEntityByIDPathParams
	Headers    GetEntityByIDHeaders
}

type GetEntityByIDResponse struct {
	ContentType                   string
	GETEntitiesResponseTypeWithID *shared.GetEntitiesResponseTypeWithID
	Headers                       map[string][]string
	StatusCode                    int64
}
