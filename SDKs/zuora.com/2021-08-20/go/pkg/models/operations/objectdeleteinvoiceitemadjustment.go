package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteInvoiceItemAdjustmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteInvoiceItemAdjustmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteInvoiceItemAdjustmentRequest struct {
	PathParams ObjectDeleteInvoiceItemAdjustmentPathParams
	Headers    ObjectDeleteInvoiceItemAdjustmentHeaders
}

type ObjectDeleteInvoiceItemAdjustmentResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
