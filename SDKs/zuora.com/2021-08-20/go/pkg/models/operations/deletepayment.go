package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type DeletePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeletePaymentRequest struct {
	PathParams DeletePaymentPathParams
	Headers    DeletePaymentHeaders
}

type DeletePaymentResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
