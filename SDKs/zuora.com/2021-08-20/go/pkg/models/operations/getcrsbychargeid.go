package operations

import (
	"openapi/pkg/models/shared"
)

type GetCrsByChargeIDPathParams struct {
	ChargeKey string `pathParam:"style=simple,explode=false,name=charge-key"`
}

type GetCrsByChargeIDHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetCrsByChargeIDRequest struct {
	PathParams GetCrsByChargeIDPathParams
	Headers    GetCrsByChargeIDHeaders
}

type GetCrsByChargeIDResponse struct {
	ContentType           string
	GETChargeRSDetailType *shared.GetChargeRsDetailType
	Headers               map[string][]string
	StatusCode            int64
}
