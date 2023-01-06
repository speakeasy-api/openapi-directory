package operations

import (
	"openapi/pkg/models/shared"
)

type PutPaymentRunPathParams struct {
	PaymentRunID string `pathParam:"style=simple,explode=false,name=paymentRunId"`
}

type PutPaymentRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutPaymentRunRequest struct {
	PathParams PutPaymentRunPathParams
	Headers    PutPaymentRunHeaders
	Request    shared.PutPaymentRunRequest `request:"mediaType=application/json"`
}

type PutPaymentRunResponse struct {
	ContentType       string
	GETPaymentRunType *shared.GetPaymentRunType
	Headers           map[string][]string
	StatusCode        int64
}
