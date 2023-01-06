package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetRatePlanChargeTierPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetRatePlanChargeTierQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetRatePlanChargeTierHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetRatePlanChargeTierRequest struct {
	PathParams  ObjectGetRatePlanChargeTierPathParams
	QueryParams ObjectGetRatePlanChargeTierQueryParams
	Headers     ObjectGetRatePlanChargeTierHeaders
}

type ObjectGetRatePlanChargeTierResponse struct {
	ContentType                string
	Headers                    map[string][]string
	ProxyGetRatePlanChargeTier *shared.ProxyGetRatePlanChargeTier
	ProxyNoDataResponse        *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse  *shared.ProxyUnauthorizedResponse
	StatusCode                 int64
}
