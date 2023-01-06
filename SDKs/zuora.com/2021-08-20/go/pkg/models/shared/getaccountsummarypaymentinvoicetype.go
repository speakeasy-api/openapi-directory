package shared

type GetAccountSummaryPaymentInvoiceType struct {
	AppliedPaymentAmount *string `json:"appliedPaymentAmount,omitempty"`
	InvoiceID            *string `json:"invoiceId,omitempty"`
	InvoiceNumber        *string `json:"invoiceNumber,omitempty"`
}
