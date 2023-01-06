package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteProductRatePlanPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteProductRatePlanHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteProductRatePlanRequest struct {
	PathParams ObjectDeleteProductRatePlanPathParams
	Headers    ObjectDeleteProductRatePlanHeaders
}

type ObjectDeleteProductRatePlanResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
