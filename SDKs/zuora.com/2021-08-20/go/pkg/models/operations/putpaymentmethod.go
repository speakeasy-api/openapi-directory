package operations

import (
	"openapi/pkg/models/shared"
)

type PutPaymentMethodPathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
}

type PutPaymentMethodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutPaymentMethodRequest struct {
	PathParams PutPaymentMethodPathParams
	Headers    PutPaymentMethodHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutPaymentMethodResponse struct {
	ContentType              string
	Headers                  map[string][]string
	PUTPaymentMethodResponse *shared.PutPaymentMethodResponse
	StatusCode               int64
}
