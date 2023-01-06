package shared

type PaymentInvoiceApplicationItemUnapplyRequestType struct {
	Amount        float64 `json:"amount"`
	InvoiceItemID *string `json:"invoiceItemId,omitempty"`
	TaxItemID     *string `json:"taxItemId,omitempty"`
}
