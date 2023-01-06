package shared

type HybridTransactionTypeEnum string

const (
	HybridTransactionTypeEnumTransaction    HybridTransactionTypeEnum = "transaction"
	HybridTransactionTypeEnumSubtransaction HybridTransactionTypeEnum = "subtransaction"
)

type HybridTransaction struct {
	AccountName         string                    `json:"account_name"`
	CategoryName        *string                   `json:"category_name,omitempty"`
	ParentTransactionID *string                   `json:"parent_transaction_id,omitempty"`
	PayeeName           *string                   `json:"payee_name,omitempty"`
	Type                HybridTransactionTypeEnum `json:"type"`
}
