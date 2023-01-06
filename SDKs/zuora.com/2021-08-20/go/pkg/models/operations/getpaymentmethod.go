package operations

type GetPaymentMethodPathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
}

type GetPaymentMethodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentMethodRequest struct {
	PathParams GetPaymentMethodPathParams
	Headers    GetPaymentMethodHeaders
}

type GetPaymentMethodResponse struct {
	ContentType              string
	GETPaymentMethodResponse map[string]interface{}
	Headers                  map[string][]string
	StatusCode               int64
}
