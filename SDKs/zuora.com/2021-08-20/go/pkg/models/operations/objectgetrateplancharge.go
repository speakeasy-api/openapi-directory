package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetRatePlanChargePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetRatePlanChargeQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetRatePlanChargeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetRatePlanChargeRequest struct {
	PathParams  ObjectGetRatePlanChargePathParams
	QueryParams ObjectGetRatePlanChargeQueryParams
	Headers     ObjectGetRatePlanChargeHeaders
}

type ObjectGetRatePlanChargeResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetRatePlanCharge    map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
