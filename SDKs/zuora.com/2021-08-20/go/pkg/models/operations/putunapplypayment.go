package operations

import (
	"openapi/pkg/models/shared"
)

type PutUnapplyPaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type PutUnapplyPaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUnapplyPaymentRequest struct {
	PathParams PutUnapplyPaymentPathParams
	Headers    PutUnapplyPaymentHeaders
	Request    shared.UnapplyPaymentType `request:"mediaType=application/json"`
}

type PutUnapplyPaymentResponse struct {
	ContentType      string
	GETARPaymentType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
