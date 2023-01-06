package operations

import (
	"openapi/pkg/models/shared"
)

type PutVerifyPaymentMethodsPathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
}

type PutVerifyPaymentMethodsHeaders struct {
	ZuoraTrackID *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutVerifyPaymentMethodsRequest struct {
	PathParams PutVerifyPaymentMethodsPathParams
	Headers    PutVerifyPaymentMethodsHeaders
	Request    shared.PutVerifyPaymentMethodType `request:"mediaType=application/json"`
}

type PutVerifyPaymentMethodsResponse struct {
	ContentType                        string
	Headers                            map[string][]string
	PUTVerifyPaymentMethodResponseType *shared.PutVerifyPaymentMethodResponseType
	StatusCode                         int64
}
