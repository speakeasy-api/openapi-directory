package shared

// PutWriteOffInvoiceResponseCreditMemo
// Container for the credit memo that is automatically generated when writing off invoices.
type PutWriteOffInvoiceResponseCreditMemo struct {
	ID *string `json:"id,omitempty"`
}

type PutWriteOffInvoiceResponse struct {
	CreditMemo *PutWriteOffInvoiceResponseCreditMemo `json:"creditMemo,omitempty"`
	Success    *bool                                 `json:"success,omitempty"`
}
