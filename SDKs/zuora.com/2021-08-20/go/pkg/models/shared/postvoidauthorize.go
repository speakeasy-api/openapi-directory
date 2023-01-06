package shared

type PostVoidAuthorize struct {
	AccountID        *string `json:"accountId,omitempty"`
	AccountNumber    *string `json:"accountNumber,omitempty"`
	GatewayOrderID   string  `json:"gatewayOrderId"`
	PaymentGatewayID *string `json:"paymentGatewayId,omitempty"`
	TransactionID    string  `json:"transactionId"`
}
