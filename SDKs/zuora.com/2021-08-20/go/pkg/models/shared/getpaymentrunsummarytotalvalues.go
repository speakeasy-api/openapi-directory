package shared

type GetPaymentRunSummaryTotalValues struct {
	TotalValueOfCreditBalance          *string `json:"totalValueOfCreditBalance,omitempty"`
	TotalValueOfCreditMemos            *string `json:"totalValueOfCreditMemos,omitempty"`
	TotalValueOfDebitMemos             *string `json:"totalValueOfDebitMemos,omitempty"`
	TotalValueOfErrors                 *string `json:"totalValueOfErrors,omitempty"`
	TotalValueOfInvoices               *string `json:"totalValueOfInvoices,omitempty"`
	TotalValueOfPayments               *string `json:"totalValueOfPayments,omitempty"`
	TotalValueOfReceivables            *string `json:"totalValueOfReceivables,omitempty"`
	TotalValueOfUnappliedPayments      *int64  `json:"totalValueOfUnappliedPayments,omitempty"`
	TotalValueOfUnprocessedDebitMemos  *string `json:"totalValueOfUnprocessedDebitMemos,omitempty"`
	TotalValueOfUnprocessedInvoices    *string `json:"totalValueOfUnprocessedInvoices,omitempty"`
	TotalValueOfUnprocessedReceivables *string `json:"totalValueOfUnprocessedReceivables,omitempty"`
}
