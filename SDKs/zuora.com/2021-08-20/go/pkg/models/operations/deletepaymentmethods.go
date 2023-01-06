package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePaymentMethodsPathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
}

type DeletePaymentMethodsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeletePaymentMethodsRequest struct {
	PathParams DeletePaymentMethodsPathParams
	Headers    DeletePaymentMethodsHeaders
}

type DeletePaymentMethodsResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
