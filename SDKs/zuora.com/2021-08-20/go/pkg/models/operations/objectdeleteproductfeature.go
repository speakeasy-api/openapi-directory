package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteProductFeaturePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteProductFeatureHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteProductFeatureRequest struct {
	PathParams ObjectDeleteProductFeaturePathParams
	Headers    ObjectDeleteProductFeatureHeaders
}

type ObjectDeleteProductFeatureResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
