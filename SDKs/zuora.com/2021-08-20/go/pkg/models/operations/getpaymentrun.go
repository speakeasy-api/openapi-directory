package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentRunPathParams struct {
	PaymentRunID string `pathParam:"style=simple,explode=false,name=paymentRunId"`
}

type GetPaymentRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentRunRequest struct {
	PathParams GetPaymentRunPathParams
	Headers    GetPaymentRunHeaders
}

type GetPaymentRunResponse struct {
	ContentType       string
	GETPaymentRunType *shared.GetPaymentRunType
	Headers           map[string][]string
	StatusCode        int64
}
