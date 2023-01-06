package operations

type PutUpdatePaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type PutUpdatePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUpdatePaymentRequest struct {
	PathParams PutUpdatePaymentPathParams
	Headers    PutUpdatePaymentHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutUpdatePaymentResponse struct {
	ContentType      string
	GETARPaymentType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
