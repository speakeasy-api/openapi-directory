package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetRatePlanPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetRatePlanQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetRatePlanHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetRatePlanRequest struct {
	PathParams  ObjectGetRatePlanPathParams
	QueryParams ObjectGetRatePlanQueryParams
	Headers     ObjectGetRatePlanHeaders
}

type ObjectGetRatePlanResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetRatePlan          map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
