package shared

type GenerateBillingDocumentResponseType struct {
	CreditMemos []CreditMemoResponseType `json:"creditMemos,omitempty"`
	Invoices    []InvoiceResponseType    `json:"invoices,omitempty"`
	Success     *bool                    `json:"success,omitempty"`
}
