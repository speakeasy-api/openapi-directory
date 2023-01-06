package shared

type DerivedTransactionsSummaryCategoryTypeEnum string

const (
	DerivedTransactionsSummaryCategoryTypeEnumTransfer             DerivedTransactionsSummaryCategoryTypeEnum = "TRANSFER"
	DerivedTransactionsSummaryCategoryTypeEnumDeferredCompensation DerivedTransactionsSummaryCategoryTypeEnum = "DEFERRED_COMPENSATION"
	DerivedTransactionsSummaryCategoryTypeEnumUncategorize         DerivedTransactionsSummaryCategoryTypeEnum = "UNCATEGORIZE"
	DerivedTransactionsSummaryCategoryTypeEnumIncome               DerivedTransactionsSummaryCategoryTypeEnum = "INCOME"
	DerivedTransactionsSummaryCategoryTypeEnumExpense              DerivedTransactionsSummaryCategoryTypeEnum = "EXPENSE"
)

type DerivedTransactionsSummary struct {
	CategorySummary []DerivedCategorySummary                    `json:"categorySummary,omitempty"`
	CategoryType    *DerivedTransactionsSummaryCategoryTypeEnum `json:"categoryType,omitempty"`
	CreditTotal     *Money                                      `json:"creditTotal,omitempty"`
	DebitTotal      *Money                                      `json:"debitTotal,omitempty"`
	Links           *DerivedTransactionsLinks                   `json:"links,omitempty"`
}
