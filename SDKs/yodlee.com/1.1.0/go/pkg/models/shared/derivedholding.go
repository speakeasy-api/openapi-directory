package shared

type DerivedHoldingHoldingTypeEnum string

const (
	DerivedHoldingHoldingTypeEnumStock               DerivedHoldingHoldingTypeEnum = "stock"
	DerivedHoldingHoldingTypeEnumMutualFund          DerivedHoldingHoldingTypeEnum = "mutualFund"
	DerivedHoldingHoldingTypeEnumBond                DerivedHoldingHoldingTypeEnum = "bond"
	DerivedHoldingHoldingTypeEnumCd                  DerivedHoldingHoldingTypeEnum = "CD"
	DerivedHoldingHoldingTypeEnumOption              DerivedHoldingHoldingTypeEnum = "option"
	DerivedHoldingHoldingTypeEnumMoneyMarketFund     DerivedHoldingHoldingTypeEnum = "moneyMarketFund"
	DerivedHoldingHoldingTypeEnumOther               DerivedHoldingHoldingTypeEnum = "other"
	DerivedHoldingHoldingTypeEnumRemic               DerivedHoldingHoldingTypeEnum = "remic"
	DerivedHoldingHoldingTypeEnumFuture              DerivedHoldingHoldingTypeEnum = "future"
	DerivedHoldingHoldingTypeEnumCommodity           DerivedHoldingHoldingTypeEnum = "commodity"
	DerivedHoldingHoldingTypeEnumCurrency            DerivedHoldingHoldingTypeEnum = "currency"
	DerivedHoldingHoldingTypeEnumUnitInvestmentTrust DerivedHoldingHoldingTypeEnum = "unitInvestmentTrust"
	DerivedHoldingHoldingTypeEnumEmployeeStockOption DerivedHoldingHoldingTypeEnum = "employeeStockOption"
	DerivedHoldingHoldingTypeEnumInsuranceAnnuity    DerivedHoldingHoldingTypeEnum = "insuranceAnnuity"
	DerivedHoldingHoldingTypeEnumUnknown             DerivedHoldingHoldingTypeEnum = "unknown"
	DerivedHoldingHoldingTypeEnumPreferredStock      DerivedHoldingHoldingTypeEnum = "preferredStock"
	DerivedHoldingHoldingTypeEnumEtf                 DerivedHoldingHoldingTypeEnum = "ETF"
	DerivedHoldingHoldingTypeEnumWarrants            DerivedHoldingHoldingTypeEnum = "warrants"
	DerivedHoldingHoldingTypeEnumEtn                 DerivedHoldingHoldingTypeEnum = "ETN"
)

type DerivedHoldingOptionTypeEnum string

const (
	DerivedHoldingOptionTypeEnumPut     DerivedHoldingOptionTypeEnum = "put"
	DerivedHoldingOptionTypeEnumCall    DerivedHoldingOptionTypeEnum = "call"
	DerivedHoldingOptionTypeEnumUnknown DerivedHoldingOptionTypeEnum = "unknown"
	DerivedHoldingOptionTypeEnumOther   DerivedHoldingOptionTypeEnum = "other"
)

type DerivedHolding struct {
	AccountID               *int64                         `json:"accountId,omitempty"`
	AccruedIncome           *Money                         `json:"accruedIncome,omitempty"`
	AccruedInterest         *Money                         `json:"accruedInterest,omitempty"`
	AssetClassification     *AssetClassification           `json:"assetClassification,omitempty"`
	ContractQuantity        *float64                       `json:"contractQuantity,omitempty"`
	CostBasis               *Money                         `json:"costBasis,omitempty"`
	CouponRate              *float64                       `json:"couponRate,omitempty"`
	CreatedDate             *string                        `json:"createdDate,omitempty"`
	CusipNumber             *string                        `json:"cusipNumber,omitempty"`
	Description             *string                        `json:"description,omitempty"`
	EnrichedDescription     *string                        `json:"enrichedDescription,omitempty"`
	ExercisedQuantity       *float64                       `json:"exercisedQuantity,omitempty"`
	ExpirationDate          *string                        `json:"expirationDate,omitempty"`
	GrantDate               *string                        `json:"grantDate,omitempty"`
	HoldingType             *DerivedHoldingHoldingTypeEnum `json:"holdingType,omitempty"`
	ID                      *int64                         `json:"id,omitempty"`
	InterestRate            *float64                       `json:"interestRate,omitempty"`
	IsShort                 *bool                          `json:"isShort,omitempty"`
	Isin                    *string                        `json:"isin,omitempty"`
	LastUpdated             *string                        `json:"lastUpdated,omitempty"`
	MatchStatus             *string                        `json:"matchStatus,omitempty"`
	MaturityDate            *string                        `json:"maturityDate,omitempty"`
	OptionType              *DerivedHoldingOptionTypeEnum  `json:"optionType,omitempty"`
	Price                   *Money                         `json:"price,omitempty"`
	ProviderAccountID       *int64                         `json:"providerAccountId,omitempty"`
	Quantity                *float64                       `json:"quantity,omitempty"`
	SecurityStyle           *string                        `json:"securityStyle,omitempty"`
	SecurityType            *string                        `json:"securityType,omitempty"`
	Sedol                   *string                        `json:"sedol,omitempty"`
	Spread                  *Money                         `json:"spread,omitempty"`
	StrikePrice             *Money                         `json:"strikePrice,omitempty"`
	Symbol                  *string                        `json:"symbol,omitempty"`
	Term                    *string                        `json:"term,omitempty"`
	UnvestedQuantity        *float64                       `json:"unvestedQuantity,omitempty"`
	UnvestedValue           *Money                         `json:"unvestedValue,omitempty"`
	Value                   *Money                         `json:"value,omitempty"`
	VestedQuantity          *float64                       `json:"vestedQuantity,omitempty"`
	VestedSharesExercisable *float64                       `json:"vestedSharesExercisable,omitempty"`
	VestedValue             *Money                         `json:"vestedValue,omitempty"`
	VestingDate             *string                        `json:"vestingDate,omitempty"`
}
