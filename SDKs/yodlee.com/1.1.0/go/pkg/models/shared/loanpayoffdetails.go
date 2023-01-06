package shared

type LoanPayoffDetails struct {
	OutstandingBalance *Money  `json:"outstandingBalance,omitempty"`
	PayByDate          *string `json:"payByDate,omitempty"`
	PayoffAmount       *Money  `json:"payoffAmount,omitempty"`
}
