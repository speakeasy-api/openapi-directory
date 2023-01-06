package operations

import (
	"openapi/pkg/models/shared"
)

type PutTransferPaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type PutTransferPaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutTransferPaymentRequest struct {
	PathParams PutTransferPaymentPathParams
	Headers    PutTransferPaymentHeaders
	Request    shared.TransferPaymentType `request:"mediaType=application/json"`
}

type PutTransferPaymentResponse struct {
	ContentType      string
	GETARPaymentType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
