package operations

import (
	"openapi/pkg/models/shared"
)

type PostSettlePaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=payment-id"`
}

type PostSettlePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostSettlePaymentRequest struct {
	PathParams PostSettlePaymentPathParams
	Headers    PostSettlePaymentHeaders
	Request    shared.PostSettlePaymentRequest `request:"mediaType=application/json"`
}

type PostSettlePaymentResponse struct {
	ContentType               string
	Headers                   map[string][]string
	POSTSettlePaymentResponse *shared.PostSettlePaymentResponse
	StatusCode                int64
}
