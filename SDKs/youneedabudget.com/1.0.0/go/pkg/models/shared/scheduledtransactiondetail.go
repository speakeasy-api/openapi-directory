package shared

type ScheduledTransactionDetail struct {
	AccountName     string                    `json:"account_name"`
	CategoryName    *string                   `json:"category_name,omitempty"`
	PayeeName       *string                   `json:"payee_name,omitempty"`
	Subtransactions []ScheduledSubTransaction `json:"subtransactions"`
}
