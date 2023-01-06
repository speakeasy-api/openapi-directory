package operations

import (
	"openapi/pkg/models/shared"
)

type GetRevenueItemsByChargeRevenueEventNumberPathParams struct {
	EventNumber string `pathParam:"style=simple,explode=false,name=event-number"`
}

type GetRevenueItemsByChargeRevenueEventNumberQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetRevenueItemsByChargeRevenueEventNumberHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRevenueItemsByChargeRevenueEventNumberRequest struct {
	PathParams  GetRevenueItemsByChargeRevenueEventNumberPathParams
	QueryParams GetRevenueItemsByChargeRevenueEventNumberQueryParams
	Headers     GetRevenueItemsByChargeRevenueEventNumberHeaders
}

type GetRevenueItemsByChargeRevenueEventNumberResponse struct {
	ContentType         string
	GETRevenueItemsType *shared.GetRevenueItemsType
	Headers             map[string][]string
	StatusCode          int64
}
