package shared

type VerifyAccountRequestContainerEnum string

const (
	VerifyAccountRequestContainerEnumBank             VerifyAccountRequestContainerEnum = "bank"
	VerifyAccountRequestContainerEnumCreditCard       VerifyAccountRequestContainerEnum = "creditCard"
	VerifyAccountRequestContainerEnumInvestment       VerifyAccountRequestContainerEnum = "investment"
	VerifyAccountRequestContainerEnumInsurance        VerifyAccountRequestContainerEnum = "insurance"
	VerifyAccountRequestContainerEnumLoan             VerifyAccountRequestContainerEnum = "loan"
	VerifyAccountRequestContainerEnumReward           VerifyAccountRequestContainerEnum = "reward"
	VerifyAccountRequestContainerEnumRealEstate       VerifyAccountRequestContainerEnum = "realEstate"
	VerifyAccountRequestContainerEnumOtherAssets      VerifyAccountRequestContainerEnum = "otherAssets"
	VerifyAccountRequestContainerEnumOtherLiabilities VerifyAccountRequestContainerEnum = "otherLiabilities"
)

type VerifyAccountRequestInput struct {
	AccountID           *int64                             `json:"accountId,omitempty"`
	Container           *VerifyAccountRequestContainerEnum `json:"container,omitempty"`
	TransactionCriteria []VerifyTransactionCriteriaInput   `json:"transactionCriteria"`
}
