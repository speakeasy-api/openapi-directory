package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsagePathParams struct {
	AccountKey string `pathParam:"style=simple,explode=false,name=account-key"`
}

type GetUsageQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetUsageHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetUsageRequest struct {
	PathParams  GetUsagePathParams
	QueryParams GetUsageQueryParams
	Headers     GetUsageHeaders
}

type GetUsageResponse struct {
	ContentType     string
	GETUsageWrapper *shared.GetUsageWrapper
	Headers         map[string][]string
	StatusCode      int64
}
