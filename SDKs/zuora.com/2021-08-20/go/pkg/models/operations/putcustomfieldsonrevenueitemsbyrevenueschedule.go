package operations

import (
	"openapi/pkg/models/shared"
)

type PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams struct {
	RsNumber string `pathParam:"style=simple,explode=false,name=rs-number"`
}

type PutCustomFieldsonRevenueItemsByRevenueScheduleHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutCustomFieldsonRevenueItemsByRevenueScheduleRequest struct {
	PathParams PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams
	Headers    PutCustomFieldsonRevenueItemsByRevenueScheduleHeaders
	Request    shared.PutScheduleRiDetailType `request:"mediaType=application/json"`
}

type PutCustomFieldsonRevenueItemsByRevenueScheduleResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
