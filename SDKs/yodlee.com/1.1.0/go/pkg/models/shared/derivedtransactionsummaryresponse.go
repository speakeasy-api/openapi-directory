package shared

type DerivedTransactionSummaryResponse struct {
	Links              *DerivedTransactionsLinks    `json:"links,omitempty"`
	TransactionSummary []DerivedTransactionsSummary `json:"transactionSummary,omitempty"`
}
