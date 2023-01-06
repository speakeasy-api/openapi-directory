package operations

import (
	"openapi/pkg/models/shared"
)

type GetRevenueEventForRevenueSchedulePathParams struct {
	RsNumber string `pathParam:"style=simple,explode=false,name=rs-number"`
}

type GetRevenueEventForRevenueScheduleQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetRevenueEventForRevenueScheduleHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRevenueEventForRevenueScheduleRequest struct {
	PathParams  GetRevenueEventForRevenueSchedulePathParams
	QueryParams GetRevenueEventForRevenueScheduleQueryParams
	Headers     GetRevenueEventForRevenueScheduleHeaders
}

type GetRevenueEventForRevenueScheduleResponse struct {
	ContentType                string
	GETRevenueEventDetailsType *shared.GetRevenueEventDetailsType
	Headers                    map[string][]string
	StatusCode                 int64
}
