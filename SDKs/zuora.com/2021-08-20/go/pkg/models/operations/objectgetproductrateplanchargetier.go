package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetProductRatePlanChargeTierPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetProductRatePlanChargeTierQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetProductRatePlanChargeTierHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetProductRatePlanChargeTierRequest struct {
	PathParams  ObjectGetProductRatePlanChargeTierPathParams
	QueryParams ObjectGetProductRatePlanChargeTierQueryParams
	Headers     ObjectGetProductRatePlanChargeTierHeaders
}

type ObjectGetProductRatePlanChargeTierResponse struct {
	ContentType                       string
	Headers                           map[string][]string
	ProxyGetProductRatePlanChargeTier *shared.ProxyGetProductRatePlanChargeTier
	ProxyNoDataResponse               *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse         *shared.ProxyUnauthorizedResponse
	StatusCode                        int64
}
