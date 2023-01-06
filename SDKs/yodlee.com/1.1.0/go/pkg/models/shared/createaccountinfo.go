package shared

type CreateAccountInfoFrequencyEnum string

const (
	CreateAccountInfoFrequencyEnumDaily           CreateAccountInfoFrequencyEnum = "DAILY"
	CreateAccountInfoFrequencyEnumOneTime         CreateAccountInfoFrequencyEnum = "ONE_TIME"
	CreateAccountInfoFrequencyEnumWeekly          CreateAccountInfoFrequencyEnum = "WEEKLY"
	CreateAccountInfoFrequencyEnumEvery2Weeks     CreateAccountInfoFrequencyEnum = "EVERY_2_WEEKS"
	CreateAccountInfoFrequencyEnumSemiMonthly     CreateAccountInfoFrequencyEnum = "SEMI_MONTHLY"
	CreateAccountInfoFrequencyEnumMonthly         CreateAccountInfoFrequencyEnum = "MONTHLY"
	CreateAccountInfoFrequencyEnumQuarterly       CreateAccountInfoFrequencyEnum = "QUARTERLY"
	CreateAccountInfoFrequencyEnumSemiAnnually    CreateAccountInfoFrequencyEnum = "SEMI_ANNUALLY"
	CreateAccountInfoFrequencyEnumAnnually        CreateAccountInfoFrequencyEnum = "ANNUALLY"
	CreateAccountInfoFrequencyEnumEvery2Months    CreateAccountInfoFrequencyEnum = "EVERY_2_MONTHS"
	CreateAccountInfoFrequencyEnumEbill           CreateAccountInfoFrequencyEnum = "EBILL"
	CreateAccountInfoFrequencyEnumFirstDayMonthly CreateAccountInfoFrequencyEnum = "FIRST_DAY_MONTHLY"
	CreateAccountInfoFrequencyEnumLastDayMonthly  CreateAccountInfoFrequencyEnum = "LAST_DAY_MONTHLY"
	CreateAccountInfoFrequencyEnumEvery4Weeks     CreateAccountInfoFrequencyEnum = "EVERY_4_WEEKS"
	CreateAccountInfoFrequencyEnumUnknown         CreateAccountInfoFrequencyEnum = "UNKNOWN"
	CreateAccountInfoFrequencyEnumOther           CreateAccountInfoFrequencyEnum = "OTHER"
)

type CreateAccountInfoValuationTypeEnum string

const (
	CreateAccountInfoValuationTypeEnumSystem CreateAccountInfoValuationTypeEnum = "SYSTEM"
	CreateAccountInfoValuationTypeEnumManual CreateAccountInfoValuationTypeEnum = "MANUAL"
)

type CreateAccountInfo struct {
	AccountName       string                              `json:"accountName"`
	AccountNumber     *string                             `json:"accountNumber,omitempty"`
	AccountType       string                              `json:"accountType"`
	Address           *AccountAddress                     `json:"address,omitempty"`
	AmountDue         *Money                              `json:"amountDue,omitempty"`
	Balance           *Money                              `json:"balance,omitempty"`
	DueDate           *string                             `json:"dueDate,omitempty"`
	Frequency         *CreateAccountInfoFrequencyEnum     `json:"frequency,omitempty"`
	HomeValue         *Money                              `json:"homeValue,omitempty"`
	IncludeInNetWorth *string                             `json:"includeInNetWorth,omitempty"`
	Memo              *string                             `json:"memo,omitempty"`
	Nickname          *string                             `json:"nickname,omitempty"`
	ValuationType     *CreateAccountInfoValuationTypeEnum `json:"valuationType,omitempty"`
}
