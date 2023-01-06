package shared

type GetPaymentRunSummaryResponse struct {
	NumberOfCreditBalanceAdjustments *int64                            `json:"numberOfCreditBalanceAdjustments,omitempty"`
	NumberOfCreditMemos              *int64                            `json:"numberOfCreditMemos,omitempty"`
	NumberOfDebitMemos               *int64                            `json:"numberOfDebitMemos,omitempty"`
	NumberOfErrorInputData           *int64                            `json:"numberOfErrorInputData,omitempty"`
	NumberOfErrors                   *int64                            `json:"numberOfErrors,omitempty"`
	NumberOfInputData                *int64                            `json:"numberOfInputData,omitempty"`
	NumberOfInvoices                 *int64                            `json:"numberOfInvoices,omitempty"`
	NumberOfPayments                 *int64                            `json:"numberOfPayments,omitempty"`
	NumberOfProcessedInputData       *int64                            `json:"numberOfProcessedInputData,omitempty"`
	NumberOfReceivables              *int64                            `json:"numberOfReceivables,omitempty"`
	NumberOfUnappliedPayments        *int64                            `json:"numberOfUnappliedPayments,omitempty"`
	NumberOfUnprocessedDebitMemos    *int64                            `json:"numberOfUnprocessedDebitMemos,omitempty"`
	NumberOfUnprocessedInvoices      *int64                            `json:"numberOfUnprocessedInvoices,omitempty"`
	NumberOfUnprocessedReceivables   *int64                            `json:"numberOfUnprocessedReceivables,omitempty"`
	Success                          *bool                             `json:"success,omitempty"`
	TotalValues                      []GetPaymentRunSummaryTotalValues `json:"totalValues,omitempty"`
}
