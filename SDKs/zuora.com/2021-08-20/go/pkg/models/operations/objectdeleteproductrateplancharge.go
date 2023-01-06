package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteProductRatePlanChargePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteProductRatePlanChargeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteProductRatePlanChargeRequest struct {
	PathParams ObjectDeleteProductRatePlanChargePathParams
	Headers    ObjectDeleteProductRatePlanChargeHeaders
}

type ObjectDeleteProductRatePlanChargeResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
