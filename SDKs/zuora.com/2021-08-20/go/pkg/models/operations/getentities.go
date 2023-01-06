package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntitiesQueryParams struct {
	Provisioned *string `queryParam:"style=form,explode=true,name=provisioned"`
}

type GetEntitiesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetEntitiesRequest struct {
	QueryParams GetEntitiesQueryParams
	Headers     GetEntitiesHeaders
}

type GetEntitiesResponse struct {
	ContentType             string
	GETEntitiesResponseType *shared.GetEntitiesResponseType
	Headers                 map[string][]string
	StatusCode              int64
}
