package operations

import (
	"openapi/pkg/models/shared"
)

type PutScrubPaymentMethodsPathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
}

type PutScrubPaymentMethodsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutScrubPaymentMethodsRequest struct {
	PathParams PutScrubPaymentMethodsPathParams
	Headers    PutScrubPaymentMethodsHeaders
}

type PutScrubPaymentMethodsResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
