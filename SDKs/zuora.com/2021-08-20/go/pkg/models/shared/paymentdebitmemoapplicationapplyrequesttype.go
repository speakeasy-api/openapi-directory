package shared

type PaymentDebitMemoApplicationApplyRequestType struct {
	Amount      float64                                           `json:"amount"`
	DebitMemoID *string                                           `json:"debitMemoId,omitempty"`
	Items       []PaymentDebitMemoApplicationItemApplyRequestType `json:"items,omitempty"`
}
