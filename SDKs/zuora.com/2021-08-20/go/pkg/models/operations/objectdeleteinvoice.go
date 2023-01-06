package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteInvoicePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteInvoiceRequest struct {
	PathParams ObjectDeleteInvoicePathParams
	Headers    ObjectDeleteInvoiceHeaders
}

type ObjectDeleteInvoiceResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
