package operations

import (
	"openapi/pkg/models/shared"
)

type GetRampMetricsByRampNumberPathParams struct {
	RampNumber string `pathParam:"style=simple,explode=false,name=rampNumber"`
}

type GetRampMetricsByRampNumberHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRampMetricsByRampNumberRequest struct {
	PathParams GetRampMetricsByRampNumberPathParams
	Headers    GetRampMetricsByRampNumberHeaders
}

type GetRampMetricsByRampNumberResponse struct {
	ContentType                            string
	GETRampMetricsByRampNumberResponseType *shared.GetRampMetricsByRampNumberResponseType
	Headers                                map[string][]string
	StatusCode                             int64
}
