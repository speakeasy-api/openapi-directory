package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentRunSummaryPathParams struct {
	PaymentRunID string `pathParam:"style=simple,explode=false,name=paymentRunId"`
}

type GetPaymentRunSummaryHeaders struct {
	ZuoraTrackID *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentRunSummaryRequest struct {
	PathParams GetPaymentRunSummaryPathParams
	Headers    GetPaymentRunSummaryHeaders
}

type GetPaymentRunSummaryResponse struct {
	ContentType                  string
	GETPaymentRunSummaryResponse *shared.GetPaymentRunSummaryResponse
	Headers                      map[string][]string
	StatusCode                   int64
}
