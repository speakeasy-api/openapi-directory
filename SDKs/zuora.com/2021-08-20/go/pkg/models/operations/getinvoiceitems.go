package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoiceItemsPathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetInvoiceItemsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetInvoiceItemsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetInvoiceItemsRequest struct {
	PathParams  GetInvoiceItemsPathParams
	QueryParams GetInvoiceItemsQueryParams
	Headers     GetInvoiceItemsHeaders
}

type GetInvoiceItemsResponse struct {
	ContentType             string
	GETInvoiceItemsResponse *shared.GetInvoiceItemsResponse
	Headers                 map[string][]string
	StatusCode              int64
}
