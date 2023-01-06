package shared

type TransactionDetail struct {
	AccountName     string           `json:"account_name"`
	CategoryName    *string          `json:"category_name,omitempty"`
	PayeeName       *string          `json:"payee_name,omitempty"`
	Subtransactions []SubTransaction `json:"subtransactions"`
}
