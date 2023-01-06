package shared

type PutPaymentMethodResponseType struct {
	PaymentMethodID *string `json:"paymentMethodId,omitempty"`
	Success         *bool   `json:"success,omitempty"`
}
