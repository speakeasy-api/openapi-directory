package shared

// PutReverseInvoiceResponseTypeCreditMemo
// Container for the credit memo that is auto-generated when reversing invoices.
type PutReverseInvoiceResponseTypeCreditMemo struct {
	ID *string `json:"id,omitempty"`
}

type PutReverseInvoiceResponseType struct {
	CreditMemo *PutReverseInvoiceResponseTypeCreditMemo `json:"creditMemo,omitempty"`
	Success    *bool                                    `json:"success,omitempty"`
}
