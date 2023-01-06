package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteUnitOfMeasurePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteUnitOfMeasureHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteUnitOfMeasureRequest struct {
	PathParams ObjectDeleteUnitOfMeasurePathParams
	Headers    ObjectDeleteUnitOfMeasureHeaders
}

type ObjectDeleteUnitOfMeasureResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
