package shared

type CreatedAccountInfo struct {
	AccountName   *string `json:"accountName,omitempty"`
	AccountNumber *string `json:"accountNumber,omitempty"`
	ID            *int64  `json:"id,omitempty"`
}
