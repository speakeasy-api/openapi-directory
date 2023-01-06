package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentPartPathParams struct {
	Partid    string `pathParam:"style=simple,explode=false,name=partid"`
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentPartHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentPartRequest struct {
	PathParams GetPaymentPartPathParams
	Headers    GetPaymentPartHeaders
}

type GetPaymentPartResponse struct {
	ContentType        string
	GETPaymentPartType *shared.GetPaymentPartType
	Headers            map[string][]string
	StatusCode         int64
}
