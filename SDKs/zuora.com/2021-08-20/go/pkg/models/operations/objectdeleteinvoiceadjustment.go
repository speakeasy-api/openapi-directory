package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteInvoiceAdjustmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteInvoiceAdjustmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteInvoiceAdjustmentRequest struct {
	PathParams ObjectDeleteInvoiceAdjustmentPathParams
	Headers    ObjectDeleteInvoiceAdjustmentHeaders
}

type ObjectDeleteInvoiceAdjustmentResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
