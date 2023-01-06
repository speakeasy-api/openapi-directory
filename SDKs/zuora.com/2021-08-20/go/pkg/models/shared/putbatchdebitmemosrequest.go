package shared

type PutBatchDebitMemosRequest struct {
	DebitMemos []BatchDebitMemoType `json:"debitMemos,omitempty"`
}
