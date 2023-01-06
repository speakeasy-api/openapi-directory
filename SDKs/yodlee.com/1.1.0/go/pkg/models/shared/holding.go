package shared

type HoldingHoldingTypeEnum string

const (
	HoldingHoldingTypeEnumStock               HoldingHoldingTypeEnum = "stock"
	HoldingHoldingTypeEnumMutualFund          HoldingHoldingTypeEnum = "mutualFund"
	HoldingHoldingTypeEnumBond                HoldingHoldingTypeEnum = "bond"
	HoldingHoldingTypeEnumCd                  HoldingHoldingTypeEnum = "CD"
	HoldingHoldingTypeEnumOption              HoldingHoldingTypeEnum = "option"
	HoldingHoldingTypeEnumMoneyMarketFund     HoldingHoldingTypeEnum = "moneyMarketFund"
	HoldingHoldingTypeEnumOther               HoldingHoldingTypeEnum = "other"
	HoldingHoldingTypeEnumRemic               HoldingHoldingTypeEnum = "remic"
	HoldingHoldingTypeEnumFuture              HoldingHoldingTypeEnum = "future"
	HoldingHoldingTypeEnumCommodity           HoldingHoldingTypeEnum = "commodity"
	HoldingHoldingTypeEnumCurrency            HoldingHoldingTypeEnum = "currency"
	HoldingHoldingTypeEnumUnitInvestmentTrust HoldingHoldingTypeEnum = "unitInvestmentTrust"
	HoldingHoldingTypeEnumEmployeeStockOption HoldingHoldingTypeEnum = "employeeStockOption"
	HoldingHoldingTypeEnumInsuranceAnnuity    HoldingHoldingTypeEnum = "insuranceAnnuity"
	HoldingHoldingTypeEnumUnknown             HoldingHoldingTypeEnum = "unknown"
	HoldingHoldingTypeEnumPreferredStock      HoldingHoldingTypeEnum = "preferredStock"
	HoldingHoldingTypeEnumEtf                 HoldingHoldingTypeEnum = "ETF"
	HoldingHoldingTypeEnumWarrants            HoldingHoldingTypeEnum = "warrants"
	HoldingHoldingTypeEnumEtn                 HoldingHoldingTypeEnum = "ETN"
)

type HoldingOptionTypeEnum string

const (
	HoldingOptionTypeEnumPut     HoldingOptionTypeEnum = "put"
	HoldingOptionTypeEnumCall    HoldingOptionTypeEnum = "call"
	HoldingOptionTypeEnumUnknown HoldingOptionTypeEnum = "unknown"
	HoldingOptionTypeEnumOther   HoldingOptionTypeEnum = "other"
)

type Holding struct {
	AccountID               *int64                  `json:"accountId,omitempty"`
	AccruedIncome           *Money                  `json:"accruedIncome,omitempty"`
	AccruedInterest         *Money                  `json:"accruedInterest,omitempty"`
	AssetClassification     []AssetClassification   `json:"assetClassification,omitempty"`
	ContractQuantity        *float64                `json:"contractQuantity,omitempty"`
	CostBasis               *Money                  `json:"costBasis,omitempty"`
	CouponRate              *float64                `json:"couponRate,omitempty"`
	CreatedDate             *string                 `json:"createdDate,omitempty"`
	CusipNumber             *string                 `json:"cusipNumber,omitempty"`
	Description             *string                 `json:"description,omitempty"`
	EnrichedDescription     *string                 `json:"enrichedDescription,omitempty"`
	ExercisedQuantity       *float64                `json:"exercisedQuantity,omitempty"`
	ExpirationDate          *string                 `json:"expirationDate,omitempty"`
	GrantDate               *string                 `json:"grantDate,omitempty"`
	HoldingType             *HoldingHoldingTypeEnum `json:"holdingType,omitempty"`
	ID                      *int64                  `json:"id,omitempty"`
	InterestRate            *float64                `json:"interestRate,omitempty"`
	IsShort                 *bool                   `json:"isShort,omitempty"`
	Isin                    *string                 `json:"isin,omitempty"`
	LastUpdated             *string                 `json:"lastUpdated,omitempty"`
	MatchStatus             *string                 `json:"matchStatus,omitempty"`
	MaturityDate            *string                 `json:"maturityDate,omitempty"`
	OptionType              *HoldingOptionTypeEnum  `json:"optionType,omitempty"`
	Price                   *Money                  `json:"price,omitempty"`
	ProviderAccountID       *int64                  `json:"providerAccountId,omitempty"`
	Quantity                *float64                `json:"quantity,omitempty"`
	SecurityStyle           *string                 `json:"securityStyle,omitempty"`
	SecurityType            *string                 `json:"securityType,omitempty"`
	Sedol                   *string                 `json:"sedol,omitempty"`
	Spread                  *Money                  `json:"spread,omitempty"`
	StrikePrice             *Money                  `json:"strikePrice,omitempty"`
	Symbol                  *string                 `json:"symbol,omitempty"`
	Term                    *string                 `json:"term,omitempty"`
	UnvestedQuantity        *float64                `json:"unvestedQuantity,omitempty"`
	UnvestedValue           *Money                  `json:"unvestedValue,omitempty"`
	Value                   *Money                  `json:"value,omitempty"`
	VestedQuantity          *float64                `json:"vestedQuantity,omitempty"`
	VestedSharesExercisable *float64                `json:"vestedSharesExercisable,omitempty"`
	VestedValue             *Money                  `json:"vestedValue,omitempty"`
	VestingDate             *string                 `json:"vestingDate,omitempty"`
}
