package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionPaymentPathParams struct {
	AccountKey string `pathParam:"style=simple,explode=false,name=account-key"`
}

type GetTransactionPaymentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetTransactionPaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetTransactionPaymentRequest struct {
	PathParams  GetTransactionPaymentPathParams
	QueryParams GetTransactionPaymentQueryParams
	Headers     GetTransactionPaymentHeaders
}

type GetTransactionPaymentResponse struct {
	ContentType     string
	GETPaymentsType *shared.GetPaymentsType
	Headers         map[string][]string
	StatusCode      int64
}
