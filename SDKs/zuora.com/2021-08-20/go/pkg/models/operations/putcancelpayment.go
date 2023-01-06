package operations

type PutCancelPaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type PutCancelPaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutCancelPaymentRequest struct {
	PathParams PutCancelPaymentPathParams
	Headers    PutCancelPaymentHeaders
}

type PutCancelPaymentResponse struct {
	ContentType      string
	GETARPaymentType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
