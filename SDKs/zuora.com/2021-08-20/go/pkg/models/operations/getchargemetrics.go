package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetChargeMetricsQueryParams struct {
	FromTimestamp time.Time `queryParam:"style=form,explode=true,name=fromTimestamp"`
	ToTimestamp   time.Time `queryParam:"style=form,explode=true,name=toTimestamp"`
}

type GetChargeMetricsHeaders struct {
	Accept         *string `header:"style=simple,explode=false,name=Accept"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetChargeMetricsRequest struct {
	QueryParams GetChargeMetricsQueryParams
	Headers     GetChargeMetricsHeaders
}

type GetChargeMetricsResponse struct {
	ChargeMetricsResponse      *shared.ChargeMetricsResponse
	CommonReasonsErrorResponse *shared.CommonReasonsErrorResponse
	ContentType                string
	Headers                    map[string][]string
	StatusCode                 int64
}
