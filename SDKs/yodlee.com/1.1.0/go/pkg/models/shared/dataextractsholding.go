package shared

type DataExtractsHoldingHoldingTypeEnum string

const (
	DataExtractsHoldingHoldingTypeEnumStock               DataExtractsHoldingHoldingTypeEnum = "stock"
	DataExtractsHoldingHoldingTypeEnumMutualFund          DataExtractsHoldingHoldingTypeEnum = "mutualFund"
	DataExtractsHoldingHoldingTypeEnumBond                DataExtractsHoldingHoldingTypeEnum = "bond"
	DataExtractsHoldingHoldingTypeEnumCd                  DataExtractsHoldingHoldingTypeEnum = "CD"
	DataExtractsHoldingHoldingTypeEnumOption              DataExtractsHoldingHoldingTypeEnum = "option"
	DataExtractsHoldingHoldingTypeEnumMoneyMarketFund     DataExtractsHoldingHoldingTypeEnum = "moneyMarketFund"
	DataExtractsHoldingHoldingTypeEnumOther               DataExtractsHoldingHoldingTypeEnum = "other"
	DataExtractsHoldingHoldingTypeEnumRemic               DataExtractsHoldingHoldingTypeEnum = "remic"
	DataExtractsHoldingHoldingTypeEnumFuture              DataExtractsHoldingHoldingTypeEnum = "future"
	DataExtractsHoldingHoldingTypeEnumCommodity           DataExtractsHoldingHoldingTypeEnum = "commodity"
	DataExtractsHoldingHoldingTypeEnumCurrency            DataExtractsHoldingHoldingTypeEnum = "currency"
	DataExtractsHoldingHoldingTypeEnumUnitInvestmentTrust DataExtractsHoldingHoldingTypeEnum = "unitInvestmentTrust"
	DataExtractsHoldingHoldingTypeEnumEmployeeStockOption DataExtractsHoldingHoldingTypeEnum = "employeeStockOption"
	DataExtractsHoldingHoldingTypeEnumInsuranceAnnuity    DataExtractsHoldingHoldingTypeEnum = "insuranceAnnuity"
	DataExtractsHoldingHoldingTypeEnumUnknown             DataExtractsHoldingHoldingTypeEnum = "unknown"
	DataExtractsHoldingHoldingTypeEnumPreferredStock      DataExtractsHoldingHoldingTypeEnum = "preferredStock"
	DataExtractsHoldingHoldingTypeEnumEtf                 DataExtractsHoldingHoldingTypeEnum = "ETF"
	DataExtractsHoldingHoldingTypeEnumWarrants            DataExtractsHoldingHoldingTypeEnum = "warrants"
	DataExtractsHoldingHoldingTypeEnumEtn                 DataExtractsHoldingHoldingTypeEnum = "ETN"
)

type DataExtractsHoldingOptionTypeEnum string

const (
	DataExtractsHoldingOptionTypeEnumPut     DataExtractsHoldingOptionTypeEnum = "put"
	DataExtractsHoldingOptionTypeEnumCall    DataExtractsHoldingOptionTypeEnum = "call"
	DataExtractsHoldingOptionTypeEnumUnknown DataExtractsHoldingOptionTypeEnum = "unknown"
	DataExtractsHoldingOptionTypeEnumOther   DataExtractsHoldingOptionTypeEnum = "other"
)

type DataExtractsHolding struct {
	AccountID               *int64                              `json:"accountId,omitempty"`
	AccruedIncome           *Money                              `json:"accruedIncome,omitempty"`
	AccruedInterest         *Money                              `json:"accruedInterest,omitempty"`
	ContractQuantity        *float64                            `json:"contractQuantity,omitempty"`
	CostBasis               *Money                              `json:"costBasis,omitempty"`
	CouponRate              *float64                            `json:"couponRate,omitempty"`
	CreatedDate             *string                             `json:"createdDate,omitempty"`
	CusipNumber             *string                             `json:"cusipNumber,omitempty"`
	Description             *string                             `json:"description,omitempty"`
	EnrichedDescription     *string                             `json:"enrichedDescription,omitempty"`
	ExercisedQuantity       *float64                            `json:"exercisedQuantity,omitempty"`
	ExpirationDate          *string                             `json:"expirationDate,omitempty"`
	GrantDate               *string                             `json:"grantDate,omitempty"`
	HoldingType             *DataExtractsHoldingHoldingTypeEnum `json:"holdingType,omitempty"`
	ID                      *int64                              `json:"id,omitempty"`
	InterestRate            *float64                            `json:"interestRate,omitempty"`
	IsShort                 *bool                               `json:"isShort,omitempty"`
	Isin                    *string                             `json:"isin,omitempty"`
	LastUpdated             *string                             `json:"lastUpdated,omitempty"`
	MatchStatus             *string                             `json:"matchStatus,omitempty"`
	MaturityDate            *string                             `json:"maturityDate,omitempty"`
	OptionType              *DataExtractsHoldingOptionTypeEnum  `json:"optionType,omitempty"`
	Price                   *Money                              `json:"price,omitempty"`
	ProviderAccountID       *int64                              `json:"providerAccountId,omitempty"`
	Quantity                *float64                            `json:"quantity,omitempty"`
	SecurityStyle           *string                             `json:"securityStyle,omitempty"`
	SecurityType            *string                             `json:"securityType,omitempty"`
	Sedol                   *string                             `json:"sedol,omitempty"`
	Spread                  *Money                              `json:"spread,omitempty"`
	StrikePrice             *Money                              `json:"strikePrice,omitempty"`
	Symbol                  *string                             `json:"symbol,omitempty"`
	Term                    *string                             `json:"term,omitempty"`
	UnvestedQuantity        *float64                            `json:"unvestedQuantity,omitempty"`
	UnvestedValue           *Money                              `json:"unvestedValue,omitempty"`
	Value                   *Money                              `json:"value,omitempty"`
	VestedQuantity          *float64                            `json:"vestedQuantity,omitempty"`
	VestedSharesExercisable *float64                            `json:"vestedSharesExercisable,omitempty"`
	VestedValue             *Money                              `json:"vestedValue,omitempty"`
	VestingDate             *string                             `json:"vestingDate,omitempty"`
}
