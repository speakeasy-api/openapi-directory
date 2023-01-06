package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoiceApplicationPartsPathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetInvoiceApplicationPartsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetInvoiceApplicationPartsRequest struct {
	PathParams GetInvoiceApplicationPartsPathParams
	Headers    GetInvoiceApplicationPartsHeaders
}

type GetInvoiceApplicationPartsResponse struct {
	ContentType                             string
	GetInvoiceApplicationPartCollectionType *shared.GetInvoiceApplicationPartCollectionType
	Headers                                 map[string][]string
	StatusCode                              int64
}
