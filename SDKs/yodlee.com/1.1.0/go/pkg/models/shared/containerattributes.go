package shared

type ContainerAttributes struct {
	BANK       *TransactionDays `json:"BANK,omitempty"`
	CREDITCARD *TransactionDays `json:"CREDITCARD,omitempty"`
	INSURANCE  *TransactionDays `json:"INSURANCE,omitempty"`
	INVESTMENT *TransactionDays `json:"INVESTMENT,omitempty"`
	LOAN       *TransactionDays `json:"LOAN,omitempty"`
}
