package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentItemPartPathParams struct {
	Itempartid string `pathParam:"style=simple,explode=false,name=itempartid"`
	Partid     string `pathParam:"style=simple,explode=false,name=partid"`
	PaymentID  string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentItemPartHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentItemPartRequest struct {
	PathParams GetPaymentItemPartPathParams
	Headers    GetPaymentItemPartHeaders
}

type GetPaymentItemPartResponse struct {
	ContentType            string
	GETPaymentItemPartType *shared.GetPaymentItemPartType
	Headers                map[string][]string
	StatusCode             int64
}
