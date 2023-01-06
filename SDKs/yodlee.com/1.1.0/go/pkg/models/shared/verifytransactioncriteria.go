package shared

type VerifyTransactionCriteriaBaseTypeEnum string

const (
	VerifyTransactionCriteriaBaseTypeEnumCredit VerifyTransactionCriteriaBaseTypeEnum = "CREDIT"
	VerifyTransactionCriteriaBaseTypeEnumDebit  VerifyTransactionCriteriaBaseTypeEnum = "DEBIT"
)

type VerifyTransactionCriteriaMatchedEnum string

const (
	VerifyTransactionCriteriaMatchedEnumComplete VerifyTransactionCriteriaMatchedEnum = "COMPLETE"
	VerifyTransactionCriteriaMatchedEnumNone     VerifyTransactionCriteriaMatchedEnum = "NONE"
)

type VerifyTransactionCriteriaInput struct {
	Amount       float64                                `json:"amount"`
	BaseType     *VerifyTransactionCriteriaBaseTypeEnum `json:"baseType,omitempty"`
	Date         string                                 `json:"date"`
	DateVariance *string                                `json:"dateVariance,omitempty"`
	Keyword      *string                                `json:"keyword,omitempty"`
}

type VerifyTransactionCriteria struct {
	Amount              float64                                `json:"amount"`
	BaseType            *VerifyTransactionCriteriaBaseTypeEnum `json:"baseType,omitempty"`
	Date                string                                 `json:"date"`
	DateVariance        *string                                `json:"dateVariance,omitempty"`
	Keyword             *string                                `json:"keyword,omitempty"`
	Matched             *VerifyTransactionCriteriaMatchedEnum  `json:"matched,omitempty"`
	VerifiedTransaction []Transaction                          `json:"verifiedTransaction,omitempty"`
}
