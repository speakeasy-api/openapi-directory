package shared

type PostSequenceSetRequest struct {
	CreditMemo CreditMemoEntityPrefix `json:"creditMemo"`
	DebitMemo  DebitMemoEntityPrefix  `json:"debitMemo"`
	Invoice    InvoiceEntityPrefix    `json:"invoice"`
	Name       string                 `json:"name"`
	Payment    *PaymentEntityPrefix   `json:"payment,omitempty"`
	Refund     *RefundEntityPrefix    `json:"refund,omitempty"`
}
