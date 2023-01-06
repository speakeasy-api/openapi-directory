package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionInvoicePathParams struct {
	AccountKey string `pathParam:"style=simple,explode=false,name=account-key"`
}

type GetTransactionInvoiceQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetTransactionInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetTransactionInvoiceRequest struct {
	PathParams  GetTransactionInvoicePathParams
	QueryParams GetTransactionInvoiceQueryParams
	Headers     GetTransactionInvoiceHeaders
}

type GetTransactionInvoiceResponse struct {
	ContentType           string
	GETInvoiceFileWrapper *shared.GetInvoiceFileWrapper
	Headers               map[string][]string
	StatusCode            int64
}
