package shared

type Security struct {
	AccrualMethod            *string               `json:"accrualMethod,omitempty"`
	AgencyFactor             *float64              `json:"agencyFactor,omitempty"`
	CallDate                 *string               `json:"callDate,omitempty"`
	CallPrice                *float64              `json:"callPrice,omitempty"`
	CdscFundFlag             *bool                 `json:"cdscFundFlag,omitempty"`
	ClosedFlag               *bool                 `json:"closedFlag,omitempty"`
	Cusip                    *string               `json:"cusip,omitempty"`
	Description              *string               `json:"description,omitempty"`
	FederalTaxable           *bool                 `json:"federalTaxable,omitempty"`
	FirmEligible             *string               `json:"firmEligible,omitempty"`
	FirstCouponDate          *string               `json:"firstCouponDate,omitempty"`
	Frequency                *int32                `json:"frequency,omitempty"`
	FundFamily               *string               `json:"fundFamily,omitempty"`
	GicsSector               *string               `json:"gicsSector,omitempty"`
	ID                       *int64                `json:"id,omitempty"`
	IncomeCurrency           *string               `json:"incomeCurrency,omitempty"`
	InterestRate             *float64              `json:"interestRate,omitempty"`
	IsDummySecurity          *bool                 `json:"isDummySecurity,omitempty"`
	IsEnvestnetDummySecurity *bool                 `json:"isEnvestnetDummySecurity,omitempty"`
	IsSyntheticSecurity      *bool                 `json:"isSyntheticSecurity,omitempty"`
	Isin                     *string               `json:"isin,omitempty"`
	IssueDate                *string               `json:"issueDate,omitempty"`
	IssueTypeMultiplier      *float64              `json:"issueTypeMultiplier,omitempty"`
	LastCouponDate           *string               `json:"lastCouponDate,omitempty"`
	LastModifiedDate         *string               `json:"lastModifiedDate,omitempty"`
	MaturityDate             *string               `json:"maturityDate,omitempty"`
	MinimumPurchase          *int32                `json:"minimumPurchase,omitempty"`
	MoodyRating              *string               `json:"moodyRating,omitempty"`
	SAndPRating              *string               `json:"sAndPRating,omitempty"`
	Sector                   *string               `json:"sector,omitempty"`
	Sedol                    *string               `json:"sedol,omitempty"`
	ShareClass               *string               `json:"shareClass,omitempty"`
	StateTaxable             *bool                 `json:"stateTaxable,omitempty"`
	StockExchangeDetails     []StockExchangeDetail `json:"stockExchangeDetails,omitempty"`
	Style                    *string               `json:"style,omitempty"`
	SubSector                *string               `json:"subSector,omitempty"`
	TradeCurrencyCode        *string               `json:"tradeCurrencyCode,omitempty"`
	Type                     *string               `json:"type,omitempty"`
}
