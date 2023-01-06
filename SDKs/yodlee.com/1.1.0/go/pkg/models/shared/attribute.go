package shared

type AttributeContainerEnum string

const (
	AttributeContainerEnumBank             AttributeContainerEnum = "bank"
	AttributeContainerEnumCreditCard       AttributeContainerEnum = "creditCard"
	AttributeContainerEnumInvestment       AttributeContainerEnum = "investment"
	AttributeContainerEnumInsurance        AttributeContainerEnum = "insurance"
	AttributeContainerEnumLoan             AttributeContainerEnum = "loan"
	AttributeContainerEnumReward           AttributeContainerEnum = "reward"
	AttributeContainerEnumRealEstate       AttributeContainerEnum = "realEstate"
	AttributeContainerEnumOtherAssets      AttributeContainerEnum = "otherAssets"
	AttributeContainerEnumOtherLiabilities AttributeContainerEnum = "otherLiabilities"
)

type AttributeNameEnum string

const (
	AttributeNameEnumBasicAccountInfo AttributeNameEnum = "BASIC_ACCOUNT_INFO"
	AttributeNameEnumTransactions     AttributeNameEnum = "TRANSACTIONS"
	AttributeNameEnumStatements       AttributeNameEnum = "STATEMENTS"
	AttributeNameEnumHoldings         AttributeNameEnum = "HOLDINGS"
	AttributeNameEnumAccountDetails   AttributeNameEnum = "ACCOUNT_DETAILS"
	AttributeNameEnumTax              AttributeNameEnum = "TAX"
	AttributeNameEnumEbills           AttributeNameEnum = "EBILLS"
	AttributeNameEnumFullAcctNumber   AttributeNameEnum = "FULL_ACCT_NUMBER"
	AttributeNameEnumBankTransferCode AttributeNameEnum = "BANK_TRANSFER_CODE"
	AttributeNameEnumHolderName       AttributeNameEnum = "HOLDER_NAME"
	AttributeNameEnumHolderDetails    AttributeNameEnum = "HOLDER_DETAILS"
	AttributeNameEnumPaymentProfile   AttributeNameEnum = "PAYMENT_PROFILE"
	AttributeNameEnumPaymentDetails   AttributeNameEnum = "PAYMENT_DETAILS"
	AttributeNameEnumInterestDetails  AttributeNameEnum = "INTEREST_DETAILS"
	AttributeNameEnumCoverage         AttributeNameEnum = "COVERAGE"
)

type AttributeInput struct {
	Container           []AttributeContainerEnum `json:"container,omitempty"`
	ContainerAttributes *ContainerAttributes     `json:"containerAttributes,omitempty"`
	Name                *AttributeNameEnum       `json:"name,omitempty"`
}

type Attribute struct {
	Container           []AttributeContainerEnum `json:"container,omitempty"`
	ContainerAttributes *ContainerAttributes     `json:"containerAttributes,omitempty"`
	FromDate            *string                  `json:"fromDate,omitempty"`
	FromFinYear         *string                  `json:"fromFinYear,omitempty"`
	Name                *AttributeNameEnum       `json:"name,omitempty"`
	ToDate              *string                  `json:"toDate,omitempty"`
	ToFinYear           *string                  `json:"toFinYear,omitempty"`
}
