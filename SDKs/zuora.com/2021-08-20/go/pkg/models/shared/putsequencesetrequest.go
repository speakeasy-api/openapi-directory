package shared

type PutSequenceSetRequest struct {
	CreditMemo *CreditMemoEntityPrefix `json:"creditMemo,omitempty"`
	DebitMemo  *DebitMemoEntityPrefix  `json:"debitMemo,omitempty"`
	Invoice    *InvoiceEntityPrefix    `json:"invoice,omitempty"`
	Name       *string                 `json:"name,omitempty"`
	Payment    *PaymentEntityPrefix    `json:"payment,omitempty"`
	Refund     *RefundEntityPrefix     `json:"refund,omitempty"`
}
