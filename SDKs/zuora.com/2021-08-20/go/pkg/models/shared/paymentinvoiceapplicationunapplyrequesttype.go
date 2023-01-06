package shared

type PaymentInvoiceApplicationUnapplyRequestType struct {
	Amount    float64                                           `json:"amount"`
	InvoiceID *string                                           `json:"invoiceId,omitempty"`
	Items     []PaymentInvoiceApplicationItemUnapplyRequestType `json:"items,omitempty"`
}
