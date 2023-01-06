package operations

type GetPaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentRequest struct {
	PathParams GetPaymentPathParams
	Headers    GetPaymentHeaders
}

type GetPaymentResponse struct {
	ContentType      string
	GETARPaymentType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
