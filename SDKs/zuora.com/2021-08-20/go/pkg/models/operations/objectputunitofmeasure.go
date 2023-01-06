package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutUnitOfMeasurePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutUnitOfMeasureQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutUnitOfMeasureHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutUnitOfMeasureRequest struct {
	PathParams  ObjectPutUnitOfMeasurePathParams
	QueryParams ObjectPutUnitOfMeasureQueryParams
	Headers     ObjectPutUnitOfMeasureHeaders
	Request     shared.ProxyModifyUnitOfMeasure `request:"mediaType=application/json"`
}

type ObjectPutUnitOfMeasureResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
