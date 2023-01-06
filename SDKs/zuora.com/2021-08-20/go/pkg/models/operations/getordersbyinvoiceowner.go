package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetOrdersByInvoiceOwnerPathParams struct {
	AccountNumber string `pathParam:"style=simple,explode=false,name=accountNumber"`
}

type GetOrdersByInvoiceOwnerQueryParams struct {
	DateFilterOption *string    `queryParam:"style=form,explode=true,name=dateFilterOption"`
	EndDate          *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	Page             *int64     `queryParam:"style=form,explode=true,name=page"`
	PageSize         *int64     `queryParam:"style=form,explode=true,name=pageSize"`
	StartDate        *time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type GetOrdersByInvoiceOwnerHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetOrdersByInvoiceOwnerRequest struct {
	PathParams  GetOrdersByInvoiceOwnerPathParams
	QueryParams GetOrdersByInvoiceOwnerQueryParams
	Headers     GetOrdersByInvoiceOwnerHeaders
}

type GetOrdersByInvoiceOwnerResponse struct {
	ContentType       string
	GetOrdersResponse *shared.GetOrdersResponse
	Headers           map[string][]string
	StatusCode        int64
}
