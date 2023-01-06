package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetAccountPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetAccountQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetAccountHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetAccountRequest struct {
	PathParams  ObjectGetAccountPathParams
	QueryParams ObjectGetAccountQueryParams
	Headers     ObjectGetAccountHeaders
}

type ObjectGetAccountResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetAccount           map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
