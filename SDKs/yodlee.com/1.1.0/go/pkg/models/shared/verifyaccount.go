package shared

type VerifyAccount struct {
	Account             []VerifiedAccount           `json:"account,omitempty"`
	TransactionCriteria []VerifyTransactionCriteria `json:"transactionCriteria,omitempty"`
}
