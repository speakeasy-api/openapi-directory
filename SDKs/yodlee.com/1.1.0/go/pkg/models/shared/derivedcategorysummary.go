package shared

type DerivedCategorySummary struct {
	CategoryID   *int64                          `json:"categoryId,omitempty"`
	CategoryName *string                         `json:"categoryName,omitempty"`
	CreditTotal  *Money                          `json:"creditTotal,omitempty"`
	DebitTotal   *Money                          `json:"debitTotal,omitempty"`
	Details      []DerivedCategorySummaryDetails `json:"details,omitempty"`
	Links        *DerivedTransactionsLinks       `json:"links,omitempty"`
}
