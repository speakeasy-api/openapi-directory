package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetContactPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetContactQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetContactHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetContactRequest struct {
	PathParams  ObjectGetContactPathParams
	QueryParams ObjectGetContactQueryParams
	Headers     ObjectGetContactHeaders
}

type ObjectGetContactResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetContact           map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
