package operations

import (
	"openapi/pkg/models/shared"
)

type GetRevenueItemsByChargeRevenueSummaryNumberPathParams struct {
	CrsNumber string `pathParam:"style=simple,explode=false,name=crs-number"`
}

type GetRevenueItemsByChargeRevenueSummaryNumberQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetRevenueItemsByChargeRevenueSummaryNumberHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRevenueItemsByChargeRevenueSummaryNumberRequest struct {
	PathParams  GetRevenueItemsByChargeRevenueSummaryNumberPathParams
	QueryParams GetRevenueItemsByChargeRevenueSummaryNumberQueryParams
	Headers     GetRevenueItemsByChargeRevenueSummaryNumberHeaders
}

type GetRevenueItemsByChargeRevenueSummaryNumberResponse struct {
	ContentType         string
	GETRevenueItemsType *shared.GetRevenueItemsType
	Headers             map[string][]string
	StatusCode          int64
}
