package operations

import (
	"openapi/pkg/models/shared"
)

type PostReversePaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=payment-id"`
}

type PostReversePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostReversePaymentRequest struct {
	PathParams PostReversePaymentPathParams
	Headers    PostReversePaymentHeaders
	Request    shared.PostReversePaymentRequest `request:"mediaType=application/json"`
}

type PostReversePaymentResponse struct {
	ContentType                string
	Headers                    map[string][]string
	POSTReversePaymentResponse *shared.PostReversePaymentResponse
	StatusCode                 int64
}
