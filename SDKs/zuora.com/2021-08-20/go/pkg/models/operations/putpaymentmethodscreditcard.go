package operations

import (
	"openapi/pkg/models/shared"
)

type PutPaymentMethodsCreditCardPathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
}

type PutPaymentMethodsCreditCardHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutPaymentMethodsCreditCardRequest struct {
	PathParams PutPaymentMethodsCreditCardPathParams
	Headers    PutPaymentMethodsCreditCardHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutPaymentMethodsCreditCardResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	PUTPaymentMethodResponseType *shared.PutPaymentMethodResponseType
	StatusCode                   int64
}
