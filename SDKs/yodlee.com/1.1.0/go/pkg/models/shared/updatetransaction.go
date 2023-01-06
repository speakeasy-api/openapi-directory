package shared

type UpdateTransactionCategorySourceEnum string

const (
	UpdateTransactionCategorySourceEnumSystem UpdateTransactionCategorySourceEnum = "SYSTEM"
	UpdateTransactionCategorySourceEnumUser   UpdateTransactionCategorySourceEnum = "USER"
)

type UpdateTransactionContainerEnum string

const (
	UpdateTransactionContainerEnumBank             UpdateTransactionContainerEnum = "bank"
	UpdateTransactionContainerEnumCreditCard       UpdateTransactionContainerEnum = "creditCard"
	UpdateTransactionContainerEnumInvestment       UpdateTransactionContainerEnum = "investment"
	UpdateTransactionContainerEnumInsurance        UpdateTransactionContainerEnum = "insurance"
	UpdateTransactionContainerEnumLoan             UpdateTransactionContainerEnum = "loan"
	UpdateTransactionContainerEnumReward           UpdateTransactionContainerEnum = "reward"
	UpdateTransactionContainerEnumRealEstate       UpdateTransactionContainerEnum = "realEstate"
	UpdateTransactionContainerEnumOtherAssets      UpdateTransactionContainerEnum = "otherAssets"
	UpdateTransactionContainerEnumOtherLiabilities UpdateTransactionContainerEnum = "otherLiabilities"
)

type UpdateTransactionInput struct {
	CategoryID     int64                               `json:"categoryId"`
	CategorySource UpdateTransactionCategorySourceEnum `json:"categorySource"`
	Container      UpdateTransactionContainerEnum      `json:"container"`
	Description    *DescriptionInput                   `json:"description,omitempty"`
	Memo           *string                             `json:"memo,omitempty"`
}
