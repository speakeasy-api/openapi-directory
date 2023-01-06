package shared

// PutVerifyPaymentMethodTypeGatewayOptions
// The field used to pass gateway-specific parameters and parameter values.
type PutVerifyPaymentMethodTypeGatewayOptions struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type PutVerifyPaymentMethodType struct {
	CurrencyCode       *string                                   `json:"currencyCode,omitempty"`
	GatewayOptions     *PutVerifyPaymentMethodTypeGatewayOptions `json:"gatewayOptions,omitempty"`
	PaymentGatewayName *string                                   `json:"paymentGatewayName,omitempty"`
	SecurityCode       *string                                   `json:"securityCode,omitempty"`
}
