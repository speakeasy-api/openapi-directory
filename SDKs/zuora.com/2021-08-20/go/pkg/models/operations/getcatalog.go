package operations

import (
	"openapi/pkg/models/shared"
)

type GetCatalogQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetCatalogHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type GetCatalogRequest struct {
	QueryParams GetCatalogQueryParams
	Headers     GetCatalogHeaders
}

type GetCatalogResponse struct {
	ContentType    string
	GETCatalogType *shared.GetCatalogType
	Headers        map[string][]string
	StatusCode     int64
}
