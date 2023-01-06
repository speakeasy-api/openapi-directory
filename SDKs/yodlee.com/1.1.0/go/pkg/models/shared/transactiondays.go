package shared

type TransactionDaysFullAccountNumberFieldsEnum string

const (
	TransactionDaysFullAccountNumberFieldsEnumPaymentAccountNumber  TransactionDaysFullAccountNumberFieldsEnum = "paymentAccountNumber"
	TransactionDaysFullAccountNumberFieldsEnumUnmaskedAccountNumber TransactionDaysFullAccountNumberFieldsEnum = "unmaskedAccountNumber"
)

type TransactionDays struct {
	FullAccountNumberFields []TransactionDaysFullAccountNumberFieldsEnum `json:"fullAccountNumberFields,omitempty"`
	NumberOfTransactionDays *int32                                       `json:"numberOfTransactionDays,omitempty"`
}
