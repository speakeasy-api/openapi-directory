package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteTaxationItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteTaxationItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteTaxationItemRequest struct {
	PathParams ObjectDeleteTaxationItemPathParams
	Headers    ObjectDeleteTaxationItemHeaders
}

type ObjectDeleteTaxationItemResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
