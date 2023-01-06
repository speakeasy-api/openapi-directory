package operations

import (
	"openapi/pkg/models/shared"
)

type PostRejectPaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=payment-id"`
}

type PostRejectPaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRejectPaymentRequest struct {
	PathParams PostRejectPaymentPathParams
	Headers    PostRejectPaymentHeaders
	Request    shared.PostRejectPaymentRequest `request:"mediaType=application/json"`
}

type PostRejectPaymentResponse struct {
	ContentType               string
	Headers                   map[string][]string
	POSTRejectPaymentResponse *shared.PostRejectPaymentResponse
	StatusCode                int64
}
