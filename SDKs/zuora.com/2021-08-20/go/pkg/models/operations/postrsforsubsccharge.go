package operations

import (
	"openapi/pkg/models/shared"
)

type PostRSforSubscChargePathParams struct {
	ChargeKey string `pathParam:"style=simple,explode=false,name=charge-key"`
}

type PostRSforSubscChargeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRSforSubscChargeRequest struct {
	PathParams PostRSforSubscChargePathParams
	Headers    PostRSforSubscChargeHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRSforSubscChargeResponse struct {
	ContentType                             string
	Headers                                 map[string][]string
	POSTRevenueScheduleByChargeResponseType *shared.PostRevenueScheduleByChargeResponseType
	StatusCode                              int64
}
