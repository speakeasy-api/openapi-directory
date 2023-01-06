package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetProductRatePlanPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetProductRatePlanQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetProductRatePlanHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetProductRatePlanRequest struct {
	PathParams  ObjectGetProductRatePlanPathParams
	QueryParams ObjectGetProductRatePlanQueryParams
	Headers     ObjectGetProductRatePlanHeaders
}

type ObjectGetProductRatePlanResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetProductRatePlan   map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
