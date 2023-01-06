package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetChargeMetricsDiscountAllocationDetailsQueryParams struct {
	FromTimestamp time.Time `queryParam:"style=form,explode=true,name=fromTimestamp"`
	ToTimestamp   time.Time `queryParam:"style=form,explode=true,name=toTimestamp"`
}

type GetChargeMetricsDiscountAllocationDetailsHeaders struct {
	Accept         *string `header:"style=simple,explode=false,name=Accept"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetChargeMetricsDiscountAllocationDetailsRequest struct {
	QueryParams GetChargeMetricsDiscountAllocationDetailsQueryParams
	Headers     GetChargeMetricsDiscountAllocationDetailsHeaders
}

type GetChargeMetricsDiscountAllocationDetailsResponse struct {
	ChargeMetricsDiscountAllocationDetailResponse *shared.ChargeMetricsDiscountAllocationDetailResponse
	CommonReasonsErrorResponse                    *shared.CommonReasonsErrorResponse
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
}
