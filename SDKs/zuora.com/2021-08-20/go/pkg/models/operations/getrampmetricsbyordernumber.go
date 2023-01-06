package operations

import (
	"openapi/pkg/models/shared"
)

type GetRampMetricsByOrderNumberPathParams struct {
	OrderNumber string `pathParam:"style=simple,explode=false,name=orderNumber"`
}

type GetRampMetricsByOrderNumberHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRampMetricsByOrderNumberRequest struct {
	PathParams GetRampMetricsByOrderNumberPathParams
	Headers    GetRampMetricsByOrderNumberHeaders
}

type GetRampMetricsByOrderNumberResponse struct {
	ContentType                             string
	GETRampMetricsByOrderNumberResponseType *shared.GetRampMetricsByOrderNumberResponseType
	Headers                                 map[string][]string
	StatusCode                              int64
}
