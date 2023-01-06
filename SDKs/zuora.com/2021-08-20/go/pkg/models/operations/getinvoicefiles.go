package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoiceFilesPathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetInvoiceFilesQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetInvoiceFilesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetInvoiceFilesRequest struct {
	PathParams  GetInvoiceFilesPathParams
	QueryParams GetInvoiceFilesQueryParams
	Headers     GetInvoiceFilesHeaders
}

type GetInvoiceFilesResponse struct {
	ContentType             string
	GETInvoiceFilesResponse *shared.GetInvoiceFilesResponse
	Headers                 map[string][]string
	StatusCode              int64
}
