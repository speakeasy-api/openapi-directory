package operations

type PostRefundPaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type PostRefundPaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRefundPaymentRequest struct {
	PathParams PostRefundPaymentPathParams
	Headers    PostRefundPaymentHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRefundPaymentResponse struct {
	ContentType          string
	GETRefundPaymentType map[string]interface{}
	Headers              map[string][]string
	StatusCode           int64
}
