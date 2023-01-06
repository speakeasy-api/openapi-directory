package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetUnitOfMeasurePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetUnitOfMeasureQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetUnitOfMeasureHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetUnitOfMeasureRequest struct {
	PathParams  ObjectGetUnitOfMeasurePathParams
	QueryParams ObjectGetUnitOfMeasureQueryParams
	Headers     ObjectGetUnitOfMeasureHeaders
}

type ObjectGetUnitOfMeasureResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetUnitOfMeasure     *shared.ProxyGetUnitOfMeasure
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
