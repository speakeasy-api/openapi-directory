package shared

type BillingPreviewResult struct {
	AccountID       *string                            `json:"accountId,omitempty"`
	CreditMemoItems []PostBillingPreviewCreditMemoItem `json:"creditMemoItems,omitempty"`
	InvoiceItems    []PostBillingPreviewInvoiceItem    `json:"invoiceItems,omitempty"`
	Success         *bool                              `json:"success,omitempty"`
}
