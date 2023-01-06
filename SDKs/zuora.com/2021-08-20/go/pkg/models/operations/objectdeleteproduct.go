package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteProductPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteProductHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteProductRequest struct {
	PathParams ObjectDeleteProductPathParams
	Headers    ObjectDeleteProductHeaders
}

type ObjectDeleteProductResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
