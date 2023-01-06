package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntityConnectionsQueryParams struct {
	PageSize *int64                                            `queryParam:"style=form,explode=true,name=pageSize"`
	Type     *shared.GlobalRequestPageSizeEntityConnectionEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetEntityConnectionsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetEntityConnectionsRequest struct {
	QueryParams GetEntityConnectionsQueryParams
	Headers     GetEntityConnectionsHeaders
}

type GetEntityConnectionsResponse struct {
	ContentType                      string
	GETEntityConnectionsResponseType *shared.GetEntityConnectionsResponseType
	Headers                          map[string][]string
	StatusCode                       int64
}
