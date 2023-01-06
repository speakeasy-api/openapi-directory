package shared

type ProxyCreateInvoicePayment struct {
	Amount    float64 `json:"Amount"`
	InvoiceID string  `json:"InvoiceId"`
	PaymentID string  `json:"PaymentId"`
}
