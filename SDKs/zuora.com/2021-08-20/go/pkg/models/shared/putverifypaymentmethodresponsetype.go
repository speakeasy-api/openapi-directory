package shared

type PutVerifyPaymentMethodResponseType struct {
	PaymentMethodID *string `json:"paymentMethodId,omitempty"`
	Success         *bool   `json:"success,omitempty"`
}
