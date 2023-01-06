package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostUnitOfMeasureQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostUnitOfMeasureHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostUnitOfMeasureRequest struct {
	QueryParams ObjectPostUnitOfMeasureQueryParams
	Headers     ObjectPostUnitOfMeasureHeaders
	Request     shared.ProxyCreateUnitOfMeasure `request:"mediaType=application/json"`
}

type ObjectPostUnitOfMeasureResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
