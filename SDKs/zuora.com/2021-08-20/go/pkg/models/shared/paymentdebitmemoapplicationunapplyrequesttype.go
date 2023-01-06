package shared

type PaymentDebitMemoApplicationUnapplyRequestType struct {
	Amount      float64                                             `json:"amount"`
	DebitMemoID *string                                             `json:"debitMemoId,omitempty"`
	Items       []PaymentDebitMemoApplicationItemUnapplyRequestType `json:"items,omitempty"`
}
