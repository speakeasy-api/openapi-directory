package shared

type PaymentInvoiceApplicationApplyRequestType struct {
	Amount    float64                                         `json:"amount"`
	InvoiceID *string                                         `json:"invoiceId,omitempty"`
	Items     []PaymentInvoiceApplicationItemApplyRequestType `json:"items,omitempty"`
}
