package shared

type PostInvoiceCollectResponseType struct {
	AmountCollected *string                             `json:"amountCollected,omitempty"`
	CreditMemos     []PostInvoiceCollectCreditMemosType `json:"creditMemos,omitempty"`
	Invoices        []PostInvoiceCollectInvoicesType    `json:"invoices,omitempty"`
	PaymentID       *string                             `json:"paymentId,omitempty"`
	Success         *bool                               `json:"success,omitempty"`
}
