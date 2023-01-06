package operations

import (
	"openapi/pkg/models/shared"
)

type GetTaxationItemsOfInvoiceItemPathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
	ItemID    string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetTaxationItemsOfInvoiceItemQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetTaxationItemsOfInvoiceItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetTaxationItemsOfInvoiceItemRequest struct {
	PathParams  GetTaxationItemsOfInvoiceItemPathParams
	QueryParams GetTaxationItemsOfInvoiceItemQueryParams
	Headers     GetTaxationItemsOfInvoiceItemHeaders
}

type GetTaxationItemsOfInvoiceItemResponse struct {
	ContentType                     string
	GETInvoiceTaxationItemsResponse *shared.GetInvoiceTaxationItemsResponse
	Headers                         map[string][]string
	StatusCode                      int64
}
