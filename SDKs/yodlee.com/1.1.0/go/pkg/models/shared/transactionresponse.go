package shared

type TransactionResponse struct {
	Transaction []Transaction `json:"transaction,omitempty"`
}
