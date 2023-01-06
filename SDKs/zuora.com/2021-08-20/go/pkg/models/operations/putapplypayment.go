package operations

import (
	"openapi/pkg/models/shared"
)

type PutApplyPaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type PutApplyPaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutApplyPaymentRequest struct {
	PathParams PutApplyPaymentPathParams
	Headers    PutApplyPaymentHeaders
	Request    shared.ApplyPaymentType `request:"mediaType=application/json"`
}

type PutApplyPaymentResponse struct {
	ContentType      string
	GETARPaymentType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
