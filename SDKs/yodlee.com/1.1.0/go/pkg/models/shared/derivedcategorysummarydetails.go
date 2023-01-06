package shared

type DerivedCategorySummaryDetails struct {
	CreditTotal *Money  `json:"creditTotal,omitempty"`
	Date        *string `json:"date,omitempty"`
	DebitTotal  *Money  `json:"debitTotal,omitempty"`
}
