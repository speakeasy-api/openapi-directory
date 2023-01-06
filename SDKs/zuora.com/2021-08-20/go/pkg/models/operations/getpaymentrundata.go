package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentRunDataPathParams struct {
	PaymentRunID string `pathParam:"style=simple,explode=false,name=paymentRunId"`
}

type GetPaymentRunDataHeaders struct {
	ZuoraTrackID *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentRunDataRequest struct {
	PathParams GetPaymentRunDataPathParams
	Headers    GetPaymentRunDataHeaders
}

type GetPaymentRunDataResponse struct {
	ContentType                    string
	GETPaymentRunDataArrayResponse *shared.GetPaymentRunDataArrayResponse
	Headers                        map[string][]string
	StatusCode                     int64
}
