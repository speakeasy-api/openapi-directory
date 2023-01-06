package shared

type Statement struct {
	AccountID          *int64   `json:"accountId,omitempty"`
	AmountDue          *Money   `json:"amountDue,omitempty"`
	Apr                *float64 `json:"apr,omitempty"`
	BillingPeriodEnd   *string  `json:"billingPeriodEnd,omitempty"`
	BillingPeriodStart *string  `json:"billingPeriodStart,omitempty"`
	CashAdvance        *Money   `json:"cashAdvance,omitempty"`
	CashApr            *float64 `json:"cashApr,omitempty"`
	DueDate            *string  `json:"dueDate,omitempty"`
	ID                 *int64   `json:"id,omitempty"`
	InterestAmount     *Money   `json:"interestAmount,omitempty"`
	IsLatest           *bool    `json:"isLatest,omitempty"`
	LastPaymentAmount  *Money   `json:"lastPaymentAmount,omitempty"`
	LastPaymentDate    *string  `json:"lastPaymentDate,omitempty"`
	LastUpdated        *string  `json:"lastUpdated,omitempty"`
	LoanBalance        *Money   `json:"loanBalance,omitempty"`
	MinimumPayment     *Money   `json:"minimumPayment,omitempty"`
	NewCharges         *Money   `json:"newCharges,omitempty"`
	PrincipalAmount    *Money   `json:"principalAmount,omitempty"`
	StatementDate      *string  `json:"statementDate,omitempty"`
}
