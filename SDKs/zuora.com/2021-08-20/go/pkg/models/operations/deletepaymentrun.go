package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePaymentRunPathParams struct {
	PaymentRunID string `pathParam:"style=simple,explode=false,name=paymentRunId"`
}

type DeletePaymentRunHeaders struct {
	ZuoraTrackID *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeletePaymentRunRequest struct {
	PathParams DeletePaymentRunPathParams
	Headers    DeletePaymentRunHeaders
}

type DeletePaymentRunResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
