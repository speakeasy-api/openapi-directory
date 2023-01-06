package shared

type UpdateAccountInfoAccountStatusEnum string

const (
	UpdateAccountInfoAccountStatusEnumActive     UpdateAccountInfoAccountStatusEnum = "ACTIVE"
	UpdateAccountInfoAccountStatusEnumInactive   UpdateAccountInfoAccountStatusEnum = "INACTIVE"
	UpdateAccountInfoAccountStatusEnumToBeClosed UpdateAccountInfoAccountStatusEnum = "TO_BE_CLOSED"
	UpdateAccountInfoAccountStatusEnumClosed     UpdateAccountInfoAccountStatusEnum = "CLOSED"
	UpdateAccountInfoAccountStatusEnumDeleted    UpdateAccountInfoAccountStatusEnum = "DELETED"
)

type UpdateAccountInfoContainerEnum string

const (
	UpdateAccountInfoContainerEnumBank             UpdateAccountInfoContainerEnum = "bank"
	UpdateAccountInfoContainerEnumCreditCard       UpdateAccountInfoContainerEnum = "creditCard"
	UpdateAccountInfoContainerEnumInvestment       UpdateAccountInfoContainerEnum = "investment"
	UpdateAccountInfoContainerEnumInsurance        UpdateAccountInfoContainerEnum = "insurance"
	UpdateAccountInfoContainerEnumLoan             UpdateAccountInfoContainerEnum = "loan"
	UpdateAccountInfoContainerEnumReward           UpdateAccountInfoContainerEnum = "reward"
	UpdateAccountInfoContainerEnumRealEstate       UpdateAccountInfoContainerEnum = "realEstate"
	UpdateAccountInfoContainerEnumOtherAssets      UpdateAccountInfoContainerEnum = "otherAssets"
	UpdateAccountInfoContainerEnumOtherLiabilities UpdateAccountInfoContainerEnum = "otherLiabilities"
)

type UpdateAccountInfoFrequencyEnum string

const (
	UpdateAccountInfoFrequencyEnumDaily           UpdateAccountInfoFrequencyEnum = "DAILY"
	UpdateAccountInfoFrequencyEnumOneTime         UpdateAccountInfoFrequencyEnum = "ONE_TIME"
	UpdateAccountInfoFrequencyEnumWeekly          UpdateAccountInfoFrequencyEnum = "WEEKLY"
	UpdateAccountInfoFrequencyEnumEvery2Weeks     UpdateAccountInfoFrequencyEnum = "EVERY_2_WEEKS"
	UpdateAccountInfoFrequencyEnumSemiMonthly     UpdateAccountInfoFrequencyEnum = "SEMI_MONTHLY"
	UpdateAccountInfoFrequencyEnumMonthly         UpdateAccountInfoFrequencyEnum = "MONTHLY"
	UpdateAccountInfoFrequencyEnumQuarterly       UpdateAccountInfoFrequencyEnum = "QUARTERLY"
	UpdateAccountInfoFrequencyEnumSemiAnnually    UpdateAccountInfoFrequencyEnum = "SEMI_ANNUALLY"
	UpdateAccountInfoFrequencyEnumAnnually        UpdateAccountInfoFrequencyEnum = "ANNUALLY"
	UpdateAccountInfoFrequencyEnumEvery2Months    UpdateAccountInfoFrequencyEnum = "EVERY_2_MONTHS"
	UpdateAccountInfoFrequencyEnumEbill           UpdateAccountInfoFrequencyEnum = "EBILL"
	UpdateAccountInfoFrequencyEnumFirstDayMonthly UpdateAccountInfoFrequencyEnum = "FIRST_DAY_MONTHLY"
	UpdateAccountInfoFrequencyEnumLastDayMonthly  UpdateAccountInfoFrequencyEnum = "LAST_DAY_MONTHLY"
	UpdateAccountInfoFrequencyEnumEvery4Weeks     UpdateAccountInfoFrequencyEnum = "EVERY_4_WEEKS"
	UpdateAccountInfoFrequencyEnumUnknown         UpdateAccountInfoFrequencyEnum = "UNKNOWN"
	UpdateAccountInfoFrequencyEnumOther           UpdateAccountInfoFrequencyEnum = "OTHER"
)

type UpdateAccountInfo struct {
	AccountName       *string                             `json:"accountName,omitempty"`
	AccountNumber     *string                             `json:"accountNumber,omitempty"`
	AccountStatus     *UpdateAccountInfoAccountStatusEnum `json:"accountStatus,omitempty"`
	Address           *AccountAddress                     `json:"address,omitempty"`
	AmountDue         *Money                              `json:"amountDue,omitempty"`
	Balance           *Money                              `json:"balance,omitempty"`
	Container         *UpdateAccountInfoContainerEnum     `json:"container,omitempty"`
	DueDate           *string                             `json:"dueDate,omitempty"`
	Frequency         *UpdateAccountInfoFrequencyEnum     `json:"frequency,omitempty"`
	HomeValue         *Money                              `json:"homeValue,omitempty"`
	IncludeInNetWorth *string                             `json:"includeInNetWorth,omitempty"`
	IsEbillEnrolled   *string                             `json:"isEbillEnrolled,omitempty"`
	Memo              *string                             `json:"memo,omitempty"`
	Nickname          *string                             `json:"nickname,omitempty"`
}
