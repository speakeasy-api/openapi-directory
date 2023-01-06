package shared

// PostPaymentMethodResponseReasons
// Error information. Only applicable if the payment method was not created.
type PostPaymentMethodResponseReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type PostPaymentMethodResponse struct {
	ID      *string                            `json:"id,omitempty"`
	Reasons []PostPaymentMethodResponseReasons `json:"reasons,omitempty"`
}
