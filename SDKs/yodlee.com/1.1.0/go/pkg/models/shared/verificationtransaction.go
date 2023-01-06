package shared

type VerificationTransactionBaseTypeEnum string

const (
	VerificationTransactionBaseTypeEnumCredit VerificationTransactionBaseTypeEnum = "CREDIT"
	VerificationTransactionBaseTypeEnumDebit  VerificationTransactionBaseTypeEnum = "DEBIT"
)

type VerificationTransaction struct {
	Amount   Money                               `json:"amount"`
	BaseType VerificationTransactionBaseTypeEnum `json:"baseType"`
}
