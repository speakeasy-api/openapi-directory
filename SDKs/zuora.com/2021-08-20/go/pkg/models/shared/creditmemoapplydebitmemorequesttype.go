package shared

type CreditMemoApplyDebitMemoRequestType struct {
	Amount      float64                                   `json:"amount"`
	DebitMemoID string                                    `json:"debitMemoId"`
	Items       []CreditMemoApplyDebitMemoItemRequestType `json:"items,omitempty"`
}
