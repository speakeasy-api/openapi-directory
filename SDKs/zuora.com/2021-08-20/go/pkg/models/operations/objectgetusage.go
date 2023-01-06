package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetUsagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetUsageQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetUsageHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetUsageRequest struct {
	PathParams  ObjectGetUsagePathParams
	QueryParams ObjectGetUsageQueryParams
	Headers     ObjectGetUsageHeaders
}

type ObjectGetUsageResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetUsage             map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
