package shared

type PostPaymentMethodResponseDecryption struct {
	Amount          *string `json:"amount,omitempty"`
	PaymentID       *string `json:"paymentId,omitempty"`
	PaymentMethodID *string `json:"paymentMethodId,omitempty"`
	Success         *bool   `json:"success,omitempty"`
}
