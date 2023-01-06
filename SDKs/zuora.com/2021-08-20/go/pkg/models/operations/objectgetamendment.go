package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetAmendmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetAmendmentQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetAmendmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetAmendmentRequest struct {
	PathParams  ObjectGetAmendmentPathParams
	QueryParams ObjectGetAmendmentQueryParams
	Headers     ObjectGetAmendmentHeaders
}

type ObjectGetAmendmentResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetAmendment         map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
