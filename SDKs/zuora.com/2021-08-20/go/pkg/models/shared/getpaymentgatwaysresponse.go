package shared

type GetPaymentGatwaysResponse struct {
	Paymentgateways []GetaPaymentGatwayResponse `json:"paymentgateways,omitempty"`
	Success         *bool                       `json:"success,omitempty"`
}
