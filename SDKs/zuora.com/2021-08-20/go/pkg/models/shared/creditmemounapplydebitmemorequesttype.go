package shared

type CreditMemoUnapplyDebitMemoRequestType struct {
	Amount      float64                                     `json:"amount"`
	DebitMemoID string                                      `json:"debitMemoId"`
	Items       []CreditMemoUnapplyDebitMemoItemRequestType `json:"items,omitempty"`
}
