package shared

type BudgetDetail struct {
	Accounts                 []Account                     `json:"accounts,omitempty"`
	Categories               []Category                    `json:"categories,omitempty"`
	CategoryGroups           []CategoryGroup               `json:"category_groups,omitempty"`
	Months                   []MonthDetail                 `json:"months,omitempty"`
	PayeeLocations           []PayeeLocation               `json:"payee_locations,omitempty"`
	Payees                   []Payee                       `json:"payees,omitempty"`
	ScheduledSubtransactions []ScheduledSubTransaction     `json:"scheduled_subtransactions,omitempty"`
	ScheduledTransactions    []ScheduledTransactionSummary `json:"scheduled_transactions,omitempty"`
	Subtransactions          []SubTransaction              `json:"subtransactions,omitempty"`
	Transactions             []TransactionSummary          `json:"transactions,omitempty"`
}
