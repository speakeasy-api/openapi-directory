package shared

// DebitMemoCollectRequestPayment
// Some detail info that would be used to processed an electronic payment.
// The info would only effect when `collect` set to `true`.
type DebitMemoCollectRequestPayment struct {
	GatewayID       *string `json:"gatewayId,omitempty"`
	PaymentMethodID *string `json:"paymentMethodId,omitempty"`
}

type DebitMemoCollectRequest struct {
	ApplicationOrder []string                        `json:"applicationOrder,omitempty"`
	ApplyCredit      *bool                           `json:"applyCredit,omitempty"`
	Collect          *bool                           `json:"collect,omitempty"`
	Payment          *DebitMemoCollectRequestPayment `json:"payment,omitempty"`
}
