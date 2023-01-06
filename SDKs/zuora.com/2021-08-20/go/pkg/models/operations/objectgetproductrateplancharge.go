package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetProductRatePlanChargePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetProductRatePlanChargeQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetProductRatePlanChargeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetProductRatePlanChargeRequest struct {
	PathParams  ObjectGetProductRatePlanChargePathParams
	QueryParams ObjectGetProductRatePlanChargeQueryParams
	Headers     ObjectGetProductRatePlanChargeHeaders
}

type ObjectGetProductRatePlanChargeResponse struct {
	ContentType                   string
	Headers                       map[string][]string
	ProxyGetProductRatePlanCharge map[string]interface{}
	ProxyNoDataResponse           *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse     *shared.ProxyUnauthorizedResponse
	StatusCode                    int64
}
