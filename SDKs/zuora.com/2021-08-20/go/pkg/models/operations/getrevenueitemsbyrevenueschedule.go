package operations

import (
	"openapi/pkg/models/shared"
)

type GetRevenueItemsByRevenueSchedulePathParams struct {
	RsNumber string `pathParam:"style=simple,explode=false,name=rs-number"`
}

type GetRevenueItemsByRevenueScheduleQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetRevenueItemsByRevenueScheduleHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRevenueItemsByRevenueScheduleRequest struct {
	PathParams  GetRevenueItemsByRevenueSchedulePathParams
	QueryParams GetRevenueItemsByRevenueScheduleQueryParams
	Headers     GetRevenueItemsByRevenueScheduleHeaders
}

type GetRevenueItemsByRevenueScheduleResponse struct {
	ContentType           string
	GETRsRevenueItemsType *shared.GetRsRevenueItemsType
	Headers               map[string][]string
	StatusCode            int64
}
